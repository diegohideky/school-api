/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';
import { UpdateStudentsTaskDto } from './dto/update-students-task.dto';
import { StudentTask, StudentTaskDocument } from './entities/students-task.entity';

@Injectable()
export class StudentsTasksService {
  constructor(@InjectModel(StudentTask.name) private studentTaskModel: Model<StudentTaskDocument>) {}

  create(createStudenTaskDto: CreateStudentsTaskDto) {
    const createdCat = new this.studentTaskModel(createStudenTaskDto);
    return createdCat.save();
  }

  findAll() {
    return this.studentTaskModel.find().exec();
  }

  findOne(id: string) {
    return this.studentTaskModel.findById(id).exec();
  }

  update(id: string, updateStudentTaskDto: UpdateStudentsTaskDto) {
    return this.studentTaskModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: updateStudentTaskDto
    }, {
      new: true
    });
  }
  remove(id: string) {
    return this.studentTaskModel.deleteOne({
      _id: id,
    }).exec();
  }
}
