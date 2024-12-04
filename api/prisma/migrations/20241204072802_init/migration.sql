-- DropForeignKey
ALTER TABLE "movement" DROP CONSTRAINT "movement_elaborateId_fkey";

-- AlterTable
ALTER TABLE "movement" ALTER COLUMN "elaborateId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "movement" ADD CONSTRAINT "movement_elaborateId_fkey" FOREIGN KEY ("elaborateId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
