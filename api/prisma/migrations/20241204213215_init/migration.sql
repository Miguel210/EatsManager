-- AlterTable
ALTER TABLE "document" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;
