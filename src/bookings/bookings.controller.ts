import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
@ApiTags('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() createVenueDto: CreateBookingDto) {
    return this.bookingsService.create(createVenueDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne({ id: Number(id) });
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll({});
  }

  @Get('venueId/:id')
  findBookingByVenueId(@Param('id') id: string) {
    return this.bookingsService.findAll({ where: { venueId: Number(id) } });
  }

  @Get('artistId/:id')
  findBookingByArtistId(@Param('id') id: string) {
    return this.bookingsService.findAll({ where: { artistId: Number(id) } });
  }

  @Get('timeslotId/:id')
  findBookingByTimeslotId(@Param('id') id: string) {
    return this.bookingsService.findAll({ where: { timeSlotId: Number(id) } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBookingDto) {
    return this.bookingsService.update({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingsService.remove({ id: Number(id) });
  }
}
