/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_board_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_class_categories_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_institute_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_medium_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_standards_id_fkey`;

-- DropForeignKey
ALTER TABLE `usersubjects` DROP FOREIGN KEY `usersubjects_user_id_fkey`;

-- DropIndex
DROP INDEX `usersubjects_user_id_fkey` ON `usersubjects`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_name` VARCHAR(191) NOT NULL,
    `student_email` VARCHAR(191) NOT NULL,
    `student_password` VARCHAR(191) NOT NULL,
    `institute_type_id` INTEGER NOT NULL,
    `board_id` INTEGER NOT NULL,
    `medium_id` INTEGER NOT NULL,
    `class_categories_id` INTEGER NOT NULL,
    `standards_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_institute_type_id_fkey` FOREIGN KEY (`institute_type_id`) REFERENCES `institute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_board_id_fkey` FOREIGN KEY (`board_id`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_medium_id_fkey` FOREIGN KEY (`medium_id`) REFERENCES `mediums`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_class_categories_id_fkey` FOREIGN KEY (`class_categories_id`) REFERENCES `classcategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_standards_id_fkey` FOREIGN KEY (`standards_id`) REFERENCES `standards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usersubjects` ADD CONSTRAINT `usersubjects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
