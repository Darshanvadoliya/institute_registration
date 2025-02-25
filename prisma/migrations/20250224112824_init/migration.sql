/*
  Warnings:

  - You are about to drop the column `subjects_id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_subjects_id_fkey`;

-- DropIndex
DROP INDEX `user_subjects_id_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `subjects_id`;

-- CreateTable
CREATE TABLE `usersubjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `subject_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usersubjects` ADD CONSTRAINT `usersubjects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usersubjects` ADD CONSTRAINT `usersubjects_subject_id_fkey` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
