import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma, Venue } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { isEmpty } from 'lodash';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}
  private readonly venuesLogger = new Logger(VenuesService.name);

  async create(data: CreateVenueDto): Promise<Venue> {
    this.venuesLogger.log('[create] input', data);
    const venue = await this.prisma.venue.create({
      data,
    });
    this.venuesLogger.log(`[create] Created venue with id: ${venue.id}`);
    return venue;
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VenueWhereUniqueInput;
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput;
  }): Promise<Venue[]> {
    this.venuesLogger.log('[findAll] input', params);
    const venues = await this.prisma.venue.findMany(params);
    this.venuesLogger.log(`[findAll] Found ${venues.length} venues`);
    return venues;
  }

  async findOne(where: Prisma.VenueWhereUniqueInput): Promise<Venue | null> {
    this.venuesLogger.log('[findOne] input', where);
    const venue = await this.prisma.venue.findUnique({
      where,
    });
    if (isEmpty(venue)) {
      this.venuesLogger.warn(`[findOne] No venue found with id: ${where.id}`);
      throw new NotFoundException(`No venue found with id: ${where.id}`);
    }
    this.venuesLogger.log(`[findOne] Venue found with id: ${where.id}`, venue);
    return venue;
  }

  async update(params: {
    where: Prisma.VenueWhereUniqueInput;
    data: Prisma.VenueUpdateInput;
  }): Promise<Venue> {
    this.venuesLogger.log('[update] input', params);
    await this.findOne(params.where);
    const venue = await this.prisma.venue.update(params);
    this.venuesLogger.log(
      `[update] Venue updated with id: ${params.where.id}`,
      venue,
    );
    return venue;
  }

  async remove(where: Prisma.VenueWhereUniqueInput): Promise<Venue> {
    this.venuesLogger.log('[remove] input', where);
    await this.findOne(where);
    const venue = this.prisma.venue.delete({
      where,
    });
    this.venuesLogger.log(`[delete] Venue updated with id: ${where.id}`, venue);
    return venue;
  }
}
