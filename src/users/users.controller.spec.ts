import { Test } from '@nestjs/testing';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result: User[] = [
        {
          id: 3,
          email: 'string',
          name: 'string',
          createdAt: new Date('2023-05-27T17:36:58.922Z'),
          updatedAt: new Date('2023-05-27T17:36:58.922Z'),
        },
      ];
      jest.spyOn(usersService, 'findAll').mockResolvedValue(result);

      expect(await usersController.findAll()).toBe(result);
    });
  });
});
