import { Injectable } from '@nestjs/common';
import { Booking, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBookingDto): Promise<Booking> {
    return this.prisma.booking.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BookingWhereUniqueInput;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput;
  }): Promise<Booking[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.booking.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    where: Prisma.BookingWhereUniqueInput,
  ): Promise<Booking | null> {
    return this.prisma.booking.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.BookingWhereUniqueInput;
    data: UpdateBookingDto;
  }): Promise<Booking> {
    const { where, data } = params;
    return this.prisma.booking.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.BookingWhereUniqueInput): Promise<Booking> {
    return this.prisma.booking.delete({
      where,
    });
  }
}
