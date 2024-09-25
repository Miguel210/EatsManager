/*
  Warnings:

  - Added the required column `identifier` to the `module` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "module" ADD COLUMN     "identifier" INTEGER NOT NULL;
