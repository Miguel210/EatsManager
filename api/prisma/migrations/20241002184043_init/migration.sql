/*
  Warnings:

  - You are about to drop the `_Movements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Movements" DROP CONSTRAINT "_Movements_A_fkey";

-- DropForeignKey
ALTER TABLE "_Movements" DROP CONSTRAINT "_Movements_B_fkey";

-- AlterTable
ALTER TABLE "movement" ADD COLUMN     "referenceId" TEXT;

-- DropTable
DROP TABLE "_Movements";

-- AddForeignKey
ALTER TABLE "movement" ADD CONSTRAINT "movement_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "movement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
