/*
  Warnings:

  - Made the column `elaborateId` on table `movement` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "movement" ALTER COLUMN "elaborateId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "movement" ADD CONSTRAINT "movement_elaborateId_fkey" FOREIGN KEY ("elaborateId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
