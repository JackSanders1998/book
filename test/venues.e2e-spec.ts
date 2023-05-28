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
  let userId: number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/venues (POST)', async () => {
    const { status: userStatus, body: userBody } = await request(
      app.getHttpServer(),
    )
      .post('/users')
      .send(userInput({}));
    userId = userBody.id;
    console.log(userStatus, userBody);
    expect(userStatus).toBe(201);
    expect(userBody).toEqual(
      userInput({
        id: expect.any(Number),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    );

    const { status, body } = await request(app.getHttpServer())
      .post('/venues')
      .send(venueInput({ userId: userBody.id }));
    console.log(status, body);
    expect(status).toBe(200);
    expect(body).toEqual(venueInput({ id: expect.any(Number) }));

    const { status: deleteStatus, body: bodyStatus } = await request(
      app.getHttpServer(),
    ).delete(`/users/${userId}`);
    expect(deleteStatus).toBe(200);
    expect(bodyStatus).toEqual([]);
  });

  // it('/venues (GET)', async () => {
  //   const { status, body } = await request(app.getHttpServer()).get('/venues');
  //   expect(status).toBe(200);
  //   expect(body).toEqual([]);
  // });
});
