/*
  Warnings:

  - You are about to alter the column `tahunTerbit` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Book` MODIFY `tahunTerbit` INTEGER NOT NULL;
