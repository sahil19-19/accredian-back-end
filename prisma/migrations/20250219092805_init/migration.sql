/*
  Warnings:

  - You are about to drop the column `refereeEmail` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeName` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeNumber` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrerEmail` on the `referral` table. All the data in the column will be lost.
  - Added the required column `referee_eame` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referee_email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referee_number` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrer_email` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `refereeEmail`,
    DROP COLUMN `refereeName`,
    DROP COLUMN `refereeNumber`,
    DROP COLUMN `referrerEmail`,
    ADD COLUMN `referee_eame` VARCHAR(191) NOT NULL,
    ADD COLUMN `referee_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `referee_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrer_email` VARCHAR(191) NOT NULL;
