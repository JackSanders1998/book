-- DropForeignKey
ALTER TABLE `Artist` DROP FOREIGN KEY `Artist_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_artistId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_timeSlotId_fkey`;

-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_venueId_fkey`;

-- DropForeignKey
ALTER TABLE `TimeSlot` DROP FOREIGN KEY `TimeSlot_venueId_fkey`;

-- DropForeignKey
ALTER TABLE `Venue` DROP FOREIGN KEY `Venue_userId_fkey`;

-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `status` ENUM('PENDING', 'REQUESTED', 'CONFIRMED', 'CANCELLED', 'DELETED') NOT NULL DEFAULT 'PENDING';
