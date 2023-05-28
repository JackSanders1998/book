import { Injectable } from '@nestjs/common';
import { Prisma, TimeSlot } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';

@Injectable()
export class TimeslotsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTimeslotDto): Promise<TimeSlot> {
    return this.prisma.timeSlot.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TimeSlotWhereUniqueInput;
    where?: Prisma.TimeSlotWhereInput;
    orderBy?: Prisma.TimeSlotOrderByWithRelationInput;
  }): Promise<TimeSlot[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.timeSlot.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    where: Prisma.TimeSlotWhereUniqueInput,
  ): Promise<TimeSlot | null> {
    return this.prisma.timeSlot.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.TimeSlotWhereUniqueInput;
    data: Prisma.TimeSlotUpdateInput;
  }): Promise<TimeSlot> {
    const { where, data } = params;
    return this.prisma.timeSlot.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.TimeSlotWhereUniqueInput): Promise<TimeSlot> {
    return this.prisma.timeSlot.delete({
      where,
    });
  }
}
