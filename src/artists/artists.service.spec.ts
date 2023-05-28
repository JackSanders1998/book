import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistsService, PrismaService],
    }).compile();

    service = module.get<ArtistsService>(ArtistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
