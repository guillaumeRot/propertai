/*
  Warnings:

  - You are about to drop the column `prix_m2_achat` on the `VilleIndicateur` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VilleIndicateur" DROP COLUMN "prix_m2_achat",
ADD COLUMN     "prix_m2_achat_appartement" DOUBLE PRECISION,
ADD COLUMN     "prix_m2_achat_maison" DOUBLE PRECISION;
