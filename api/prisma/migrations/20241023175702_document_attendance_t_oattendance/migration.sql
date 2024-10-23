/*
  Warnings:

  - You are about to drop the column `document` on the `attendance` table. All the data in the column will be lost.
  - Added the required column `documentId` to the `attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "attendance" DROP COLUMN "document",
ADD COLUMN     "documentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "docuemntAttendace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
