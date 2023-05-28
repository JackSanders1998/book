import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { VenuesService } from './venues.service';

describe('VenuesService', () => {
  let service: VenuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersService],
      providers: [VenuesService, PrismaService],
    }).compile();

    service = module.get<VenuesService>(VenuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
