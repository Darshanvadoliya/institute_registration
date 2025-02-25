-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `institute_type_id` INTEGER NOT NULL,
    `board_id` INTEGER NOT NULL,
    `medium_id` INTEGER NOT NULL,
    `class_categories_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_institute_type_id_fkey` FOREIGN KEY (`institute_type_id`) REFERENCES `institute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_board_id_fkey` FOREIGN KEY (`board_id`) REFERENCES `board`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_medium_id_fkey` FOREIGN KEY (`medium_id`) REFERENCES `mediums`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_class_categories_id_fkey` FOREIGN KEY (`class_categories_id`) REFERENCES `classcategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
