/*
  Warnings:

  - A unique constraint covering the columns `[referenceId]` on the table `movement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "movement_referenceId_key" ON "movement"("referenceId");
