/*
  Warnings:

  - You are about to alter the column `status` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Booking` MODIFY `status` ENUM('REQUESTED', 'CONFIRMED', 'DECLINED', 'CANCELED', 'REJECTED') NOT NULL DEFAULT 'REQUESTED';
