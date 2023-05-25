/*
  Warnings:

  - Added the required column `updatedAt` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TimeSlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Artist` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `TimeSlot` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Venue` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- RenameIndex
ALTER TABLE `Artist` RENAME INDEX `Artist_userId_fkey` TO `Artist_userId_idx`;

-- RenameIndex
ALTER TABLE `Booking` RENAME INDEX `Booking_artistId_fkey` TO `Booking_artistId_idx`;

-- RenameIndex
ALTER TABLE `Booking` RENAME INDEX `Booking_timeSlotId_fkey` TO `Booking_timeSlotId_idx`;

-- RenameIndex
ALTER TABLE `Booking` RENAME INDEX `Booking_venueId_fkey` TO `Booking_venueId_idx`;

-- RenameIndex
ALTER TABLE `TimeSlot` RENAME INDEX `TimeSlot_venueId_fkey` TO `TimeSlot_venueId_idx`;

-- RenameIndex
ALTER TABLE `Venue` RENAME INDEX `Venue_userId_fkey` TO `Venue_userId_idx`;
