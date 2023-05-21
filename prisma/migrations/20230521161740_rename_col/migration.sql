/*
  Warnings:

  - You are about to drop the column `name` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `timeslotId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Venue` table. All the data in the column will be lost.
  - Added the required column `artistName` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Made the column `end` on table `TimeSlot` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `venueName` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_timeslotId_fkey`;

-- AlterTable
ALTER TABLE `Artist` RENAME COLUMN `name` TO `artistName`;

-- AlterTable
ALTER TABLE `Booking` RENAME COLUMN `timeslotId` TO  `timeSlotId`;

-- AlterTable
ALTER TABLE `TimeSlot` MODIFY `end` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Venue` RENAME COLUMN `name` TO `venueName`;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_timeSlotId_fkey` FOREIGN KEY (`timeSlotId`) REFERENCES `TimeSlot`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
