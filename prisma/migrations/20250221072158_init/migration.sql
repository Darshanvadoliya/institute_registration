-- AlterTable
ALTER TABLE `board` ADD COLUMN `institute_id` INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE `standards` ALTER COLUMN `categories_id` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `board` ADD CONSTRAINT `board_institute_id_fkey` FOREIGN KEY (`institute_id`) REFERENCES `institute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
