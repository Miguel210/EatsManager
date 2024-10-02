/*
  Warnings:

  - You are about to drop the column `referenceId` on the `movement` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "movement" DROP CONSTRAINT "movement_referenceId_fkey";

-- DropIndex
DROP INDEX "movement_referenceId_key";

-- AlterTable
ALTER TABLE "movement" DROP COLUMN "referenceId";

-- CreateTable
CREATE TABLE "_Movements" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Movements_AB_unique" ON "_Movements"("A", "B");

-- CreateIndex
CREATE INDEX "_Movements_B_index" ON "_Movements"("B");

-- AddForeignKey
ALTER TABLE "_Movements" ADD CONSTRAINT "_Movements_A_fkey" FOREIGN KEY ("A") REFERENCES "movement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Movements" ADD CONSTRAINT "_Movements_B_fkey" FOREIGN KEY ("B") REFERENCES "movement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
