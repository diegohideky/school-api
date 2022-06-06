/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { StudentsTasksService } from './students-tasks.service';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';

@Controller('students-tasks')
export class StudentsTasksController {
  constructor(private readonly studentsTasksService: StudentsTasksService) {}

  @Post()
  create(@Body() createStudentsTaskDto: CreateStudentsTaskDto) {
    return this.studentsTasksService.create(createStudentsTaskDto);
  }

  @Get()
  findAll() {
    return this.studentsTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsTasksService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsTasksService.remove(id);
  }
}
