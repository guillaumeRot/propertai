-- CreateTable
CREATE TABLE "Avis" (
    "id" SERIAL NOT NULL,
    "analyseId" INTEGER NOT NULL,
    "design" INTEGER NOT NULL,
    "data" INTEGER NOT NULL,
    "recommendation" TEXT NOT NULL,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("id")
);
