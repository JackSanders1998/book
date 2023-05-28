import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VenuesModule } from './venues/venues.module';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { BookingsModule } from './bookings/bookings.module';
import { ArtistsModule } from './artists/artists.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UsersModule,
    VenuesModule,
    ArtistsModule,
    TimeslotsModule,
    BookingsModule,
    PrismaModule,
  ],
})
export class AppModule {}
