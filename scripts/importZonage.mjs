import pkg from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const FILE_PATH = path.join(
  process.cwd(),
  "data",
  "zonage-abc-juillet-2024.csv"
); // ton fichier

async function run() {
  const rows = [];

  fs.createReadStream(FILE_PATH)
    .pipe(csv({ separator: ";" }))
    .on("data", (row) => {
      const code_insee = row["CODGEO"];
      const nom_commune = row["LIBGEO"];
      const type_zone = row["Zone en vigueur depuis le 5 juillet 2024"];
      const departement = row["DEP"];

      if (code_insee && nom_commune && type_zone && departement) {
        rows.push({ code_insee, nom_commune, type_zone, departement });
      }
    })
    .on("end", async () => {
      console.log(`⏳ Import de ${rows.length} communes…`);

      for (const { code_insee, nom_commune, type_zone, departement } of rows) {
        await prisma.villeIndicateur.upsert({
          where: { code_insee },
          update: { type_zone, departement },
          create: {
            code_insee,
            nom_commune,
            departement,
            type_zone,
          },
        });
      }

      console.log("✅ Zonage importé avec succès.");
      await prisma.$disconnect();
    });
}

run().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
