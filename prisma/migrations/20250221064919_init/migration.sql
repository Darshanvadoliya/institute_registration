-- AlterTable
ALTER TABLE `standards` ADD COLUMN `categories_id` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `standards_id` DROP DEFAULT,
    ALTER COLUMN `subjects_id` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `standards` ADD CONSTRAINT `standards_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `classcategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
