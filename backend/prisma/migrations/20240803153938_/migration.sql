/*
  Warnings:

  - You are about to alter the column `tahun_terbit` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Book` MODIFY `tahun_terbit` INTEGER NOT NULL;
