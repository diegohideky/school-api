import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from 'src/tasks/entities/task.entity';
import { Student } from 'src/students/entities/student.entity';

export type StudentsTasksDocument = StudentsTasks & Document;

@Schema()
export class StudentsTasks {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
    task: Task;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
    student: Student;

    @Prop({ required: true })
    datetime: Date;

    @Prop({ required: true })
    score: number;

    @Prop()
    text: string;
}

export const StudentsTasksSchema = SchemaFactory.createForClass(StudentsTasks);
