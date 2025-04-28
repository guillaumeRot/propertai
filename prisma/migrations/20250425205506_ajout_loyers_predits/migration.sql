/*
  Warnings:

  - You are about to drop the column `prix_m2_loyer` on the `VilleIndicateur` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VilleIndicateur" DROP COLUMN "prix_m2_loyer",
ADD COLUMN     "loyer_m2_appart_grand" DOUBLE PRECISION,
ADD COLUMN     "loyer_m2_appart_petit" DOUBLE PRECISION,
ADD COLUMN     "loyer_m2_maison" DOUBLE PRECISION;
