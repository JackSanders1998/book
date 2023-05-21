import { ApiProperty } from '@nestjs/swagger';

export class CreateTimeslotDto {
  @ApiProperty()
  start: Date;

  @ApiProperty()
  end: Date;

  @ApiProperty()
  venueId: number;
}
