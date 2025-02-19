/*
  Warnings:

  - You are about to drop the column `referee_eame` on the `referral` table. All the data in the column will be lost.
  - Added the required column `referee_name` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `referee_eame`,
    ADD COLUMN `referee_name` VARCHAR(191) NOT NULL;
