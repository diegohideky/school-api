/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';
import { StudentTask, StudentTaskDocument } from './entities/students-task.entity';

@Injectable()
export class StudentsTasksService {
  constructor(@InjectModel(StudentTask.name) private studentTaskModel: Model<StudentTaskDocument>) {}

  create(createStudenTaskDto: CreateStudentsTaskDto) {
    const createdCat = new this.studentTaskModel(createStudenTaskDto);
    return createdCat.save();
  }

  findAll() {
    return this.studentTaskModel.find()
    .populate('student', '_id fullName')
    .populate('task', '_id title')
    .exec();
  }

  findOne(id: string) {
    return this.studentTaskModel.findById(id).exec();
  }

  findStudentsTasks(id: string) {
    return this.studentTaskModel.find({
      student: id
    }).populate('student', '_id fullName')
      .populate('task', '_id title')
      .exec();
  }

   remove(id: string) {
    return this.studentTaskModel.deleteOne({
      _id: id,
    }).exec();
  }
}
