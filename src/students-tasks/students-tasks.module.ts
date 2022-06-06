/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentsTasksService } from './students-tasks.service';
import { StudentsTasksController } from './students-tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentTask, StudentTaskSchema } from './entities/students-task.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: StudentTask.name, schema: StudentTaskSchema }])],
  controllers: [StudentsTasksController],
  providers: [StudentsTasksService],
  exports: [StudentsTasksService]
})
export class StudentsTasksModule {}
