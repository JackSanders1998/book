import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { VenuesModule } from '../src/venues/venues.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { Venue, User } from '@prisma/client';
import { useContainer } from 'class-validator';

describe('Venues (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let venue: Venue;
  let user: User;
  const venueShape = expect.objectContaining({
    id: expect.any(String),
    name: expect.any(String),
    userId: expect.any(String),
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // controllers: [VenuesController],
      // providers: [VenuesService, UsersService, PrismaService],
      imports: [VenuesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prisma = app.get<PrismaService>(PrismaService);

    useContainer(app.select(VenuesModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();

    user = await prisma.user.create({
      data: {
        name: 'user1',
        email: 'user1@user1.com',
      },
    });

    venue = await prisma.venue.create({
      data: {
        venueName: 'venue1',
        username: 'venue-1',
        user: {
          connect: { id: user.id },
        },
      },
    });

    await prisma.venue.create({
      data: {
        venueName: 'venue2',
        username: 'venue-2',
        user: {
          connect: { id: user.id },
        },
      },
    });

    afterAll(async () => {
      // await prisma.trunVenuee();
      // await prisma.resetSequences();
      await prisma.$disconnect();
      await app.close();
    });

    afterEach(async () => {
      // TODO: use transactions and transaction rollback once prisma supports it
    });

    describe('GET /venues', () => {
      it('returns a list of venues', async () => {
        const { status, body } = await request(app.getHttpServer()).get(
          '/venues',
        );

        expect(status).toBe(200);
        expect(body).toStrictEqual(expect.arrayContaining([venueShape]));
      });

      describe('with name filter', () => {
        it('returns a filtered list of venues', async () => {
          const { status, body } = await request(app.getHttpServer()).get(
            `/venues?name=${venue.venueName}`,
          );

          expect(status).toBe(200);
          expect(body).toStrictEqual(expect.arrayContaining([venueShape]));
          expect(body).toHaveLength(1);
        });
      });
    });

    describe('GET /venue/:id', () => {
      it('returns a Venue', async () => {
        const { status, body } = await request(app.getHttpServer()).get(
          `/venues/${venue.id}`,
        );

        expect(status).toBe(200);
        expect(body).toStrictEqual(venueShape);
      });
    });

    describe('POST /venues', () => {
      it('creates a Venue', async () => {
        const beforeCount = await prisma.venue.count();

        const { status, body } = await request(app.getHttpServer())
          .post('/venues')
          .send({
            name: 'TestVenue',
            breed: 'TestBreed',
            age: 5,
            userId: user.id,
          });

        const afterCount = await prisma.venue.count();

        expect(status).toBe(201);
        expect(body).toStrictEqual(venueShape);
        expect(afterCount - beforeCount).toBe(1);
      });

      describe('with non existing user', () => {
        it('returns HTTP status 400', async () => {
          const beforeCount = await prisma.venue.count();

          const { status, body } = await request(app.getHttpServer())
            .post('/venues')
            .send({
              name: 'TestVenue',
              breed: 'TestBreed',
              age: 5,
              userId: 'non-existing',
            });

          const afterCount = await prisma.venue.count();

          expect(status).toBe(400);
          expect(afterCount - beforeCount).toBe(0);
        });
      });
    });
    describe('PATCH /venues/:id', () => {
      it('updates a Venue', async () => {
        const newuser = await prisma.user.create({
          data: {
            name: 'Newuser',
            email: 'newuser@newuser.com',
          },
        });

        const { status, body } = await request(app.getHttpServer())
          .patch(`/venues/${venue.id}`)
          .send({
            name: 'ModifiedTestVenue',
            age: 2,
            userId: newuser.id,
          });

        expect(status).toBe(200);
        expect(body).toStrictEqual(venueShape);
      });
    });

    describe('DELETE /venues/:id', () => {
      it('deletes a venue', async () => {
        const { status, body } = await request(app.getHttpServer()).delete(
          `/venues/${venue.id}`,
        );

        expect(status).toBe(200);
        expect(body).toStrictEqual({ deleted: true });
      });
    });
  });
});
