/*
  Warnings:

  - You are about to drop the column `tahun_terbit` on the `Book` table. All the data in the column will be lost.
  - Added the required column `tahunTerbit` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `tahun_terbit`,
    ADD COLUMN `tahunTerbit` INTEGER NOT NULL;
