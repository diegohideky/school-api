/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './entities/student.entity';
import { StudentsTasksModule } from 'src/students-tasks/students-tasks.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    StudentsTasksModule
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
