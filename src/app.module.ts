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
      url: "mongodb+srv://ubohodickson_db_user:ii1NPEhMy0RnxIbT@cluster0.yqn2b5h.mongodb.net/?appName=Cluster0",
      synchronize: true,
      entities: [User],

  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
