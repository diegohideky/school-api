import { Module } from '@nestjs/common';
import { StudentsTasksService } from './students-tasks.service';
import { StudentsTasksController } from './students-tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsTasks, StudentsTasksSchema } from './entities/students-task.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: StudentsTasks.name, schema: StudentsTasksSchema }])],
  controllers: [StudentsTasksController],
  providers: [StudentsTasksService],
  exports: [StudentsTasksService]
})
export class StudentsTasksModule { }
