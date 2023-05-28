/*
  Warnings:

  - Made the column `userId` on table `Artist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venueId` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeSlotId` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `venueId` on table `TimeSlot` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Venue` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Artist` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Booking` MODIFY `venueId` INTEGER NOT NULL,
    MODIFY `timeSlotId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `TimeSlot` MODIFY `venueId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Venue` MODIFY `userId` INTEGER NOT NULL;
