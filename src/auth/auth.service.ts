/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // ✅ Hash password and create user
  async register(registerDto: RegisterDto): Promise<User> {
    const { email, password, firstName, lastName, otherName, role } = registerDto;

    // Check if user already exists
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    // 🔒 Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)

    // Create user with hashed password
    const newUser = await this.usersService.create({
      email, 
      firstName, 
      lastName, 
      otherName, 
      role, 
      password: hashedPassword,
    });

    return newUser;
  }

  // ✅ Validate user credentials during login
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  // ✅ Generate JWT token after login
  login(user: User) {
    const payload = { email: user.email, sub: user._id };
    return {
      id: user._id,
      email: user.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
