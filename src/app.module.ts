import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VenuesModule } from './venues/venues.module';
import { TimeslotsModule } from './timeslots/timeslots.module';
import { BookingsModule } from './bookings/bookings.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    UsersModule,
    VenuesModule,
    ArtistsModule,
    TimeslotsModule,
    BookingsModule,
    AuthModule,
  ],
})
export class AppModule {}
