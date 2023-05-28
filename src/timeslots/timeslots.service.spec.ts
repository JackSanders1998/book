import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { TimeslotsController } from './timeslots.controller';
import { TimeslotsService } from './timeslots.service';

describe('TimeslotsService', () => {
  let service: TimeslotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeslotsController],
      providers: [TimeslotsService, PrismaService],
    }).compile();

    service = module.get<TimeslotsService>(TimeslotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
