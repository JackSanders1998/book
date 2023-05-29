import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

type BookingStatus =
  | 'REQUESTED'
  | 'CONFIRMED'
  | 'DECLINED'
  | 'CANCELED'
  | 'REJECTED';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @ApiProperty()
  status?: BookingStatus;
}
