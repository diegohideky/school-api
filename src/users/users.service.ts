/* eslint-disable prettier/prettier*/
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) { }

  create(createUsersDto: CreateUserDto) {
    const createdCat = new this.usersModel(createUsersDto);
    return createdCat.save();
  }

  findAll() {
    return this.usersModel.find().exec();
  }

  findOne(id: string) {
    return this.usersModel.findById(id).exec();
  }

  update(id: string, updateUsersDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: updateUsersDto
    }, {
      new: true
    });
  }

  remove(id: string) {
    return this.usersModel.deleteOne({
      _id: id,
    }).exec();
  }
}
