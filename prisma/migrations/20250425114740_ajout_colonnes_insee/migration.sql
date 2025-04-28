/*
  Warnings:

  - You are about to drop the column `nb_habitants` on the `VilleIndicateur` table. All the data in the column will be lost.
  - You are about to drop the column `rendement_brut` on the `VilleIndicateur` table. All the data in the column will be lost.
  - You are about to drop the column `tx_vacance` on the `VilleIndicateur` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VilleIndicateur" DROP COLUMN "nb_habitants",
DROP COLUMN "rendement_brut",
DROP COLUMN "tx_vacance",
ADD COLUMN     "nb_logements_vacants" INTEGER,
ADD COLUMN     "nb_residences_principales" INTEGER,
ADD COLUMN     "nb_residences_secondaires" INTEGER,
ADD COLUMN     "part_diplomes_supp" DOUBLE PRECISION,
ADD COLUMN     "part_loges_gratuitement" DOUBLE PRECISION,
ADD COLUMN     "part_menages_1_personne" DOUBLE PRECISION,
ADD COLUMN     "part_menages_5_personnes" DOUBLE PRECISION,
ADD COLUMN     "part_mobilite_recent" DOUBLE PRECISION,
ADD COLUMN     "part_proprietaires" DOUBLE PRECISION,
ADD COLUMN     "population" INTEGER,
ADD COLUMN     "taux_vacance" DOUBLE PRECISION;
