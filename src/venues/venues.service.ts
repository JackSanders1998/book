import { Injectable } from '@nestjs/common';
import { Prisma, Venue } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateVenueDto): Promise<Venue> {
    return this.prisma.venue.create({
      data,
    });
  }

  findAll(params: {
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

  findOne(where: Prisma.VenueWhereUniqueInput): Promise<Venue | null> {
    return this.prisma.venue.findUnique({
      where,
    });
  }

  update(params: {
    where: Prisma.VenueWhereUniqueInput;
    data: Prisma.VenueUpdateInput;
  }): Promise<Venue> {
    const { where, data } = params;
    return this.prisma.venue.update({
      data,
      where,
    });
  }

  remove(where: Prisma.VenueWhereUniqueInput): Promise<Venue> {
    return this.prisma.venue.delete({
      where,
    });
  }
}
