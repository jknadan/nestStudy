import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OpinionsModule } from './opinions/opinions.module';
import { RolesModule } from './roles/roles.module';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './users/entities/user.entity';

// 모듈로 선언할 때는 @(Decorator)를 붙임 
//src/**/*.entity.ts
//join(__dirname, '/**/*.entity.ts
@Module({
  imports: [UsersModule, OpinionsModule, RolesModule,TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "jknadan",
    "password": "5247",
    "database": "test",
    "synchronize": true,
    "logging": false,
    "entities": [
       User
    ]
 })],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
