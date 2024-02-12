import { Module } from '@nestjs/common';
import { OpinionsService } from './opinions.service';
import { OpinionsController } from './opinions.controller';
import { Opinion } from './entities/opinion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Opinion])],
  controllers: [OpinionsController],
  providers: [OpinionsService],
})
export class OpinionsModule {}
