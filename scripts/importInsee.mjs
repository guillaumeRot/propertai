import pkg from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";
import path from "path";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const FILE_PATH = path.join(
  process.cwd(),
  "data",
  "insee",
  "dossier_complet.csv"
);

function parseFloatSafe(val) {
  const v = val?.toString().replace(",", ".").replace("%", "").trim();
  return isNaN(parseFloat(v)) ? null : parseFloat(v);
}

async function run() {
  const rows = [];

  fs.createReadStream(FILE_PATH)
    .pipe(csv({ separator: ";" }))
    .on("data", (row) => {
      const code_insee = row["CODGEO"];
      if (!code_insee) return;

      const RP = parseFloatSafe(row["P21_RP"]);
      const LOG = parseFloatSafe(row["P21_LOG"]);
      const LOGVAC = parseFloatSafe(row["P21_LOGVAC"]);

      const data = {
        code_insee,
        population: parseFloatSafe(row["P21_POP"]),
        nb_logements: LOG,
        nb_residences_principales: RP,
        nb_residences_secondaires: parseFloatSafe(row["P21_RSECOCC"]),
        nb_logements_vacants: LOGVAC,

        part_proprietaires: RP ? parseFloatSafe(row["P21_RP_PROP"]) / RP : null,
        part_locataires: RP ? parseFloatSafe(row["P21_RP_LOC"]) / RP : null,
        part_loges_gratuitement: RP
          ? parseFloatSafe(row["P21_RP_GRAT"]) / RP
          : null,

        taux_vacance: LOG ? LOGVAC / LOG : null,

        part_menages_1_personne: RP
          ? parseFloatSafe(row["P21_RP_1P"]) / RP
          : null,
        part_menages_5_personnes: RP
          ? parseFloatSafe(row["P21_RP_5PP"]) / RP
          : null,

        part_diplomes_supp: parseFloatSafe(row["P21_NSCOL15P_SUP2"]),
        part_mobilite_recent: RP
          ? parseFloatSafe(row["P21_MEN_ANEM0002"]) / RP
          : null,
      };

      rows.push(data);
    })
    .on("end", async () => {
      console.log(`📊 Mise à jour de ${rows.length} communes…`);

      for (const row of rows) {
        const { code_insee, ...data } = row;

        const existing = await prisma.villeIndicateur.findUnique({
          where: { code_insee },
        });

        if (!existing) continue;

        await prisma.villeIndicateur.update({
          where: { code_insee },
          data,
        });
      }

      console.log("✅ Import INSEE terminé.");
      await prisma.$disconnect();
    });
}

run().catch(async (e) => {
  console.error("❌ Erreur lors de l'import INSEE :", e);
  await prisma.$disconnect();
});
