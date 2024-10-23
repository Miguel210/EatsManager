/*
  Warnings:

  - You are about to drop the column `result` on the `evaluation` table. All the data in the column will be lost.
  - Added the required column `attitude` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `efficiency` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hygiene` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initiative` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `punctuality` to the `evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quality` to the `evaluation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "evaluation" DROP COLUMN "result",
ADD COLUMN     "attitude" INTEGER NOT NULL,
ADD COLUMN     "efficiency" INTEGER NOT NULL,
ADD COLUMN     "hygiene" INTEGER NOT NULL,
ADD COLUMN     "initiative" INTEGER NOT NULL,
ADD COLUMN     "punctuality" INTEGER NOT NULL,
ADD COLUMN     "quality" INTEGER NOT NULL;
