/*
  Warnings:

  - Added the required column `deskripsi` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahun_terbit` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `deskripsi` VARCHAR(191) NOT NULL,
    ADD COLUMN `tahun_terbit` VARCHAR(191) NOT NULL;
