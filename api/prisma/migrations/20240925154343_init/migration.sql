/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `module` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "module_id_key" ON "module"("id");
