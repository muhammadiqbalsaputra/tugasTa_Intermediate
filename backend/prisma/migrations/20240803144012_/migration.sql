/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Book_authorId_fkey` ON `Book`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `authorId`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL;
