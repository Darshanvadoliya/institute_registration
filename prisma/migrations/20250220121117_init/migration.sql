/*
  Warnings:

  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `subject`;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

