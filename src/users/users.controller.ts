import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userData: CreateUserDto): Promise<UsersModule> {
    return this.usersService.create(userData);
  }

  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne({ id: Number(id) });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id: Number(id) });
  }
}
