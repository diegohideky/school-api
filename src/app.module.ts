import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { StudentsTasksModule } from './students-tasks/students-tasks.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TasksModule,
    MongooseModule.forRoot(configuration().database.url),
    UsersModule,
    StudentsModule,
    StudentsTasksModule,
    AuthModule
  ],
  providers: [],
})
export class AppModule { }
