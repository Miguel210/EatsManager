-- AlterTable
ALTER TABLE "address" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "attendance" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "categoryProduct" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "costumer" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "employee" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "evaluation" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "garrison" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "productType" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "promotion" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "supplier" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "table" ADD COLUMN     "deleteAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false;
