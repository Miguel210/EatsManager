/*
  Warnings:

  - Added the required column `evaluatorId` to the `evaluation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "evaluation" ADD COLUMN     "evaluatorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "evaluation" ADD CONSTRAINT "evaluation_evaluatorId_fkey" FOREIGN KEY ("evaluatorId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
