import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/school')],
  controllers: [],
  providers: [],
})
export class AppModule { }
