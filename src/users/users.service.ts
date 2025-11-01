/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ObjectId } from 'mongodb'; // import this ObjectId from typeorm for other databasses like postgres

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({_id: new ObjectId(id)})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update({
      _id: new ObjectId(id)
    }, 
    updateUserDto
  );
    return this.findOne(id)
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    if (!user) return null;
    return this.userRepository.remove(user);
  }
}
