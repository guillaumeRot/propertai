import pkg from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";
import path from "path";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const DVF_DIR = path.join(process.cwd(), "data", "dvf");

const files = [
  "ValeursFoncieres-2020.txt",
  "ValeursFoncieres-2021.txt",
  "ValeursFoncieres-2022.txt",
  "ValeursFoncieres-2023.txt",
  "ValeursFoncieres-2024.txt",
];

const stats = {};

function getCodeInsee(row) {
  return `${row["Code departement"]}${row["Code commune"]}`.padStart(5, "0");
}

function cleanPrice(str) {
  return parseFloat(str.replace(",", ".").replace(" ", ""));
}

function isValidRow(row) {
  return (
    row["Valeur fonciere"] &&
    row["Surface reelle bati"] &&
    row["Type local"] &&
    !isNaN(cleanPrice(row["Valeur fonciere"])) &&
    !isNaN(cleanPrice(row["Surface reelle bati"])) &&
    cleanPrice(row["Surface reelle bati"]) > 10
  );
}

async function run() {
  for (const file of files) {
    const filePath = path.join(DVF_DIR, file);
    console.log(`📂 Lecture du fichier : ${file}`);

    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv({ separator: "|" }))
        .on("data", (row) => {
          if (!isValidRow(row)) return;

          const code_insee = getCodeInsee(row);
          const type = row["Type local"]?.toLowerCase(); // appartement / maison
          const prix = cleanPrice(row["Valeur fonciere"]);
          const surface = cleanPrice(row["Surface reelle bati"]);

          const prix_m2 = prix / surface;
          if (!stats[code_insee])
            stats[code_insee] = { appartement: [], maison: [] };

          if (type.includes("appartement"))
            stats[code_insee].appartement.push(prix_m2);
          else if (type.includes("maison"))
            stats[code_insee].maison.push(prix_m2);
        })
        .on("end", resolve)
        .on("error", reject);
    });
  }

  console.log(
    `🧮 Calcul des moyennes sur ${Object.keys(stats).length} communes…`
  );

  for (const code_insee in stats) {
    const appartList = stats[code_insee].appartement;
    const maisonList = stats[code_insee].maison;

    const prix_m2_achat_appartement = appartList.length
      ? +(appartList.reduce((a, b) => a + b, 0) / appartList.length).toFixed(2)
      : null;

    const prix_m2_achat_maison = maisonList.length
      ? +(maisonList.reduce((a, b) => a + b, 0) / maisonList.length).toFixed(2)
      : null;

    const existing = await prisma.villeIndicateur.findUnique({
      where: { code_insee },
    });

    if (existing) {
      await prisma.villeIndicateur.update({
        where: { code_insee },
        data: {
          prix_m2_achat_appartement,
          prix_m2_achat_maison,
        },
      });
    }
  }

  await prisma.$disconnect();
  console.log("✅ Import terminé.");
}

run().catch((e) => {
  console.error("❌ Erreur :", e);
  prisma.$disconnect();
});
