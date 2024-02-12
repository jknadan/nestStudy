import { Injectable } from '@nestjs/common';
import { CreateOpinionDto } from './dto/create-opinion.dto';
import { UpdateOpinionDto } from './dto/update-opinion.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Opinion } from './entities/opinion.entity';

@Injectable()
export class OpinionsService {
  constructor(
    @InjectRepository(Opinion)
    private readonly opinionRepository: Repository<Opinion>,
  ) {}

  async create(createOpinionDto: CreateOpinionDto) {
    const newOpinion = this.opinionRepository.create(createOpinionDto);
    console.log(newOpinion);
    newOpinion.createdAt = new Date();
    newOpinion.updatedAt = new Date();
    console.log(newOpinion);
    await this.opinionRepository.save(newOpinion);
    return `This action adds a new opinion${newOpinion}`;
  }

  async findAll(): Promise<Opinion[]> {
    const Opinions = this.opinionRepository.find();
    return Opinions;
  }

  findOne(id: number) {
    return `This action returns a #${id} opinion`;
  }

  update(id: number, updateOpinionDto: UpdateOpinionDto) {
    return `This action updates a #${id} opinion`;
  }

  remove(id: number) {
    return `This action removes a #${id} opinion`;
  }
}
