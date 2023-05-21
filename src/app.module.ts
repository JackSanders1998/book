import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VenuesModule } from './venues/venues.module';
import { TimeslotsModule } from './timeslots/timeslots.module';

@Module({
  imports: [AuthModule, UsersModule, VenuesModule, TimeslotsModule],
})
export class AppModule {}
