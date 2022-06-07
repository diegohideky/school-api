/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto) {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  findAll() {
    return this.userModel.find()
    .populate('dependents', '_id fullName')
    .exec();
  }

  findById(id: string) {
    return this.userModel.findById(id)
    .populate('dependents', '_id fullName')
    .exec();
  }

  findOne(query){
    return this.userModel.findOne(query).lean().exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
