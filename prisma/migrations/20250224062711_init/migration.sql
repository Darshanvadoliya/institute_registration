/*
  Warnings:

  - Added the required column `admin_email` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_password` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin` ADD COLUMN `admin_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `admin_password` VARCHAR(191) NOT NULL;
