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
CREATE TABLE `_UserSubjects` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserSubjects_AB_unique`(`A`, `B`),
    INDEX `_UserSubjects_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserSubjects` ADD CONSTRAINT `_UserSubjects_A_fkey` FOREIGN KEY (`A`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSubjects` ADD CONSTRAINT `_UserSubjects_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
