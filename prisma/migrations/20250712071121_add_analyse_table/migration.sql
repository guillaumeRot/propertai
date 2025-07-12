-- CreateTable
CREATE TABLE "Analyse" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rentabilite" TEXT,
    "loyerEstimation" TEXT,
    "loyerExplication" TEXT,
    "fiscaliteRegime" TEXT,
    "fiscaliteExplication" TEXT,
    "recommandations" TEXT[],
    "forces" TEXT[],
    "faiblesses" TEXT[],
    "questions" TEXT[],
    "strategie" TEXT,
    "estimation" TEXT,
    "prixAffiche" TEXT,
    "prixM2Quartier" TEXT,
    "commentaireEstimation" TEXT,
    "positionnement" TEXT,
    "estZoneTendue" BOOLEAN,
    "commentaireZoneTendue" TEXT,
    "infoReglementaire" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Analyse_pkey" PRIMARY KEY ("id")
);
