/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `isDelete` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "deleteAt",
DROP COLUMN "isDelete";
