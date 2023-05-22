import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty()
  venueId: number;

  @ApiProperty()
  artistId: number;

  @ApiProperty()
  timeSlotId: number;
}
