import { Injectable } from '@nestjs/common';
import { Artist, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateArtistDto): Promise<Artist> {
    return this.prisma.artist.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ArtistWhereUniqueInput;
    where?: Prisma.ArtistWhereInput;
    orderBy?: Prisma.ArtistOrderByWithRelationInput;
  }): Promise<Artist[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.artist.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(where: Prisma.ArtistWhereUniqueInput): Promise<Artist | null> {
    return this.prisma.artist.findUnique({
      where,
    });
  }

  async update(params: {
    where: Prisma.ArtistWhereUniqueInput;
    data: Prisma.ArtistUpdateInput;
  }): Promise<Artist> {
    const { where, data } = params;
    return this.prisma.artist.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ArtistWhereUniqueInput): Promise<Artist> {
    return this.prisma.artist.delete({
      where,
    });
  }
}
