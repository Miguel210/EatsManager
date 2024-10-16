-- AlterTable
ALTER TABLE "product" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;
