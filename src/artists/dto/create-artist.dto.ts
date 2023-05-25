import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty()
  artistName: string;

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
