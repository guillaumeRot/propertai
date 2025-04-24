-- CreateTable
CREATE TABLE "VilleIndicateur" (
    "code_insee" TEXT NOT NULL,
    "nom_commune" TEXT NOT NULL,
    "departement" TEXT NOT NULL,
    "prix_m2_achat" DOUBLE PRECISION,
    "prix_m2_loyer" DOUBLE PRECISION,
    "rendement_brut" DOUBLE PRECISION,
    "zone_tendue" BOOLEAN,
    "tx_vacance" DOUBLE PRECISION,
    "part_locataires" DOUBLE PRECISION,
    "nb_habitants" INTEGER,
    "nb_logements" INTEGER,
    "type_zone" TEXT,

    CONSTRAINT "VilleIndicateur_pkey" PRIMARY KEY ("code_insee")
);
