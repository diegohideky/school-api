import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }

  create(createStudentDto: CreateStudentDto) {
    const createdCat = new this.studentModel(createStudentDto);
    return createdCat.save();
  }

  findAll() {
    return this.studentModel.find().populate('responsibles', '_id username').exec();
  }

  findOne(id: string) {
    return this.studentModel.findById(id).populate('responsibles', '_id username').exec();
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.findByIdAndUpdate({
      _id: id
    }, {
      $set: updateStudentDto
    }, {
      new: true
    });
  }

  remove(id: string) {
    return this.studentModel.deleteOne({
      _id: id,
    }).exec();
  }
}
