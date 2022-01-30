import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { StudentsTasksModule } from './students-tasks/students-tasks.module';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/school'), UsersModule, StudentsModule, StudentsTasksModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
