import pkg from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const FILE_PATH = process.argv[2]; // ex: data/loyers/loyers_maison.csv
const TYPE = process.argv[3]; // maison, appart_petit, appart_grand

const FIELD_MAP = {
  maison: "loyer_m2_maison",
  appart_petit: "loyer_m2_appart_petit",
  appart_grand: "loyer_m2_appart_grand",
};

function parseFloatSafe(val) {
  const v = val?.toString().replace(",", ".").trim();
  return isNaN(parseFloat(v)) ? null : parseFloat(v);
}

async function run() {
  const rows = [];

  fs.createReadStream(path.join(process.cwd(), FILE_PATH))
    .pipe(csv({ separator: ";" }))
    .on("data", (row) => {
      const code_insee = row["INSEE_C"]?.padStart(5, "0");
      const loyer_m2 = parseFloatSafe(row["loypredm2"]);

      if (code_insee && loyer_m2) {
        rows.push({ code_insee, loyer_m2 });
      }
    })
    .on("end", async () => {
      console.log(
        `📊 Mise à jour des loyers (${TYPE}) pour ${rows.length} communes`
      );

      const field = FIELD_MAP[TYPE];

      if (!field) {
        console.error("❌ Type de bien non reconnu :", TYPE);
        process.exit(1);
      }

      for (const { code_insee, loyer_m2 } of rows) {
        const existing = await prisma.villeIndicateur.findUnique({
          where: { code_insee },
        });

        if (!existing) continue;

        await prisma.villeIndicateur.update({
          where: { code_insee },
          data: {
            [field]: loyer_m2,
          },
        });
      }

      await prisma.$disconnect();
      console.log(`✅ Import terminé pour ${TYPE}`);
    });
}

run().catch(async (e) => {
  console.error("❌ Erreur :", e);
  await prisma.$disconnect();
});
