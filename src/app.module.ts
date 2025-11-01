/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: process.env.MONGODB_URI,
      synchronize: true,
      entities: [User],
      ssl: true,
      autoLoadEntities: true,

  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
