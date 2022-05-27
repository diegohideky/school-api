/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from 'src/tasks/entities/task.entity';
import { Student } from 'src/students/entities/student.entity';

export type StudentTaskDocument = StudentTask & Document;

@Schema({ collection: 'studentTasks' })
export class StudentTask {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
  taskId: Task;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  dateTime: Student;

  @Prop({ required: true })
  score: number;

  @Prop()
  text: string;
}

export const StudentTaskSchema = SchemaFactory.createForClass(StudentTask);
