import { Injectable } from '@nestjs/common';
import { Prisma, Venue } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateVenueDto): Promise<Venue> {
    return this.prisma.venue.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VenueWhereUniqueInput;
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput;
  }): Promise<Venue[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.venue.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(where: Prisma.VenueWhereUniqueInput): Promise<Venue | null> {
    return this.prisma.venue.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.VenueWhereUniqueInput;
    data: Prisma.VenueUpdateInput;
  }): Promise<Venue> {
    const { where, data } = params;
    return this.prisma.venue.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.VenueWhereUniqueInput): Promise<Venue> {
    return this.prisma.venue.delete({
      where,
    });
  }
}
