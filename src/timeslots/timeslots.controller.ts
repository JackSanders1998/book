import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('timeslots')
@ApiTags('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @Post()
  create(@Body() createVenueDto: CreateTimeslotDto) {
    return this.timeslotsService.create(createVenueDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeslotsService.findOne({ id: Number(id) });
  }

  @Get()
  findAll() {
    return this.timeslotsService.findAll({});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTimeslotDto) {
    return this.timeslotsService.update({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeslotsService.remove({ id: Number(id) });
  }
}
