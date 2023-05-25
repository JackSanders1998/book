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
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
@ApiTags('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne({ id: Number(id) });
  }

  @Get()
  findAll() {
    return this.artistsService.findAll({});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateArtistDto) {
    return this.artistsService.update({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove({ id: Number(id) });
  }
}
