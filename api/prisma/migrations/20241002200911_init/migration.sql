-- DropForeignKey
ALTER TABLE "movementDetail" DROP CONSTRAINT "movementDetail_promotionId_fkey";

-- AlterTable
ALTER TABLE "movementDetail" ALTER COLUMN "promotionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "movementDetail" ADD CONSTRAINT "movementDetail_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
