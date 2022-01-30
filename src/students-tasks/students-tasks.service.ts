import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentsTaskDto } from './dto/create-students-task.dto';
import { StudentsTasks, StudentsTasksDocument } from './entities/students-task.entity';

@Injectable()
export class StudentsTasksService {
  constructor(@InjectModel(StudentsTasks.name) private studentsTasksModel: Model<StudentsTasksDocument>) { }

  create(studentsTaskDto: StudentsTaskDto[]) {
    return this.studentsTasksModel.insertMany(studentsTaskDto);
  }

  findAll() {
    return this.studentsTasksModel.find()
      .populate('student', '_id fullName')
      .populate('task', '_id title')
      .exec();
  }

  findOne(id: string) {
    return this.studentsTasksModel.findById(id).exec();
  }

  findStudentTasks(id: string) {
    return this.studentsTasksModel.find({
      student: id
    }).populate('student', '_id fullName')
      .populate('task', '_id title')
      .exec();
  }
}
