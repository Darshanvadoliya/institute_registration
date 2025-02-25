/*
  Warnings:

  - You are about to drop the `_usersubjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_usersubjects` DROP FOREIGN KEY `_UserSubjects_A_fkey`;

-- DropForeignKey
ALTER TABLE `_usersubjects` DROP FOREIGN KEY `_UserSubjects_B_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `subjects_id` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `_usersubjects`;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_subjects_id_fkey` FOREIGN KEY (`subjects_id`) REFERENCES `subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
