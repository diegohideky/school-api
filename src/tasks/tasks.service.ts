/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    const createdCat = new this.taskModel(createTaskDto);
    return createdCat.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateTaskDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.taskModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
