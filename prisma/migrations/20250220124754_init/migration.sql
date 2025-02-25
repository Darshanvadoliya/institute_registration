-- AlterTable
ALTER TABLE `user` ADD COLUMN `standards_id` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `subjects_id` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_standards_id_fkey` FOREIGN KEY (`standards_id`) REFERENCES `standards`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_subjects_id_fkey` FOREIGN KEY (`subjects_id`) REFERENCES `subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
