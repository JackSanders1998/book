import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { TimeslotsController } from './timeslots.controller';
import { TimeslotsService } from './timeslots.service';

describe('TimeslotsController', () => {
  let controller: TimeslotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeslotsController],
      providers: [TimeslotsService, PrismaService],
    }).compile();

    controller = module.get<TimeslotsController>(TimeslotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
