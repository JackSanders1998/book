import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

type BookingStatus =
  | 'PENDING'
  | 'REQUESTED'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'DELETED';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @ApiProperty()
  status?: BookingStatus;
}
