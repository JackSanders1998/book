import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../users/users.service';

@Controller('venues')
@ApiTags('venues')
export class VenuesController {
  constructor(
    private readonly venuesService: VenuesService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async create(@Body() body: CreateVenueDto) {
    if ((await this.usersService.findOne({ id: body.userId })) === null) {
      throw new NotFoundException(`No user found with id: ${body.userId}`);
    }

    return this.venuesService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuesService.findOne({ id: Number(id) });
  }

  @Get()
  findAll() {
    return this.venuesService.findAll({});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateVenueDto) {
    return this.venuesService.update({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuesService.remove({ id: Number(id) });
  }
}
