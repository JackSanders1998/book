import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const userInput = (overrides: Record<string, unknown>) => {
  return {
    email: 'example@example.com',
    name: 'an example user',
    ...overrides,
  };
};

const venueInput = (overrides: Record<string, unknown>) => {
  return {
    venueName: 'an example venue',
    username: 'an-example-venue',
    description: 'an example description',
    published: false,
    seats: 150,
    userId: 1,
    ...overrides,
  };
};

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/venues (POST)', async () => {
    console.log('=====create user=====');
    const { status: userStatus, body: userBody } = await request(
      app.getHttpServer(),
    )
      .post('/users')
      .send(userInput({}));
    expect(userStatus).toBe(201);
    expect(userBody).toEqual(
      userInput(
        userInput({
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      ),
    );
    console.log('user created successfully', {
      status: userStatus,
      body: userBody,
    });

    console.log('=====create venue=====');
    const { status: venueStatus, body: venueBody } = await request(
      app.getHttpServer(),
    )
      .post('/venues')
      .send(venueInput({ userId: userBody.id }));
    expect(venueStatus).toBe(201);
    expect(venueBody).toEqual(
      venueInput({
        id: expect.any(Number),
        userId: userBody.id,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
    console.log('venue created successfully', {
      status: venueStatus,
      body: venueBody,
    });

    console.log('=====get venue=====');
    const { status: getVenueStatus, body: getVenueBody } = await request(
      app.getHttpServer(),
    ).get(`/venues/${venueBody.id}`);
    expect(getVenueStatus).toBe(200);
    expect(getVenueBody).toEqual(
      venueInput({
        id: expect.any(Number),
        userId: userBody.id,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
    console.log('venue retrieved successfully', {
      status: getVenueStatus,
      body: getVenueBody,
    });

    console.log('=====update venue=====');
    const { status: updateVenueStatus, body: updateVenueBody } = await request(
      app.getHttpServer(),
    )
      .patch(`/venues/${venueBody.id}`)
      .send(
        venueInput({
          userId: userBody.id,
          published: true,
          venueName: 'updated venue',
        }),
      );
    expect(updateVenueStatus).toBe(200);
    expect(updateVenueBody).toEqual(
      venueInput({
        id: expect.any(Number),
        userId: userBody.id,
        venueName: 'updated venue',
        published: true,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
    console.log('venue updated successfully', {
      status: updateVenueStatus,
      body: updateVenueBody,
    });

    console.log('=====delete venue=====');
    await request(app.getHttpServer()).delete(`/venues/${venueBody.id}`);
    console.log('=====delete user=====');
    await request(app.getHttpServer()).delete(`/users/${userBody.id}`);
  });
});
