import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsersAPI } from './entities/usersAPI.entity';
//import bcrypt from 'bcrypt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersAPI)
    private usersAPIModel: typeof UsersAPI,
  ) {}

  async findAll(): Promise<UsersAPI[]> {
    return this.usersAPIModel.findAll();
  }

  async findOne(id: string): Promise<UsersAPI> {
    return await this.usersAPIModel.findOne({
      where: { id },
    });
  }

  async findByUsername(email: string): Promise<UsersAPI | null> {
    return this.usersAPIModel.findOne({
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UsersAPI> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    if (!hashedPassword) {
      throw new Error('Failed to hash password');
    }
    const newUserDto = { ...createUserDto, password: hashedPassword };
    return this.usersAPIModel.create(newUserDto);
  }
  
  async remove(id: string): Promise<string> {
    const user = await this.findOne(id);
    await user.destroy();
    return 'User deleted successfully';
  } 

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UsersAPI> {
    const user = await this.findOne(id);
    return user.update(updateUserDto);
  }
}