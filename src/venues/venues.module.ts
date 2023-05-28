import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService, UsersService, PrismaService],
})
export class VenuesModule {}
