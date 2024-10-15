-- AlterTable
ALTER TABLE "product" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "viewMenu" BOOLEAN NOT NULL DEFAULT false;
