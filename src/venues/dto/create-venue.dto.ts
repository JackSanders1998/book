import { ApiProperty } from '@nestjs/swagger';

export class CreateVenueDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ default: false })
  published?: boolean;

  @ApiProperty()
  seats: number;

  @ApiProperty()
  userId: number;
}
