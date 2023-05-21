import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VenuesModule } from './venues/venues.module';
import { TimeslotsModule } from './timeslots/timeslots.module';

@Module({
  imports: [AuthModule, UsersModule, VenuesModule, TimeslotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
