/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentsTasksService } from './students-tasks.service';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';

@Controller('students-tasks')
export class StudentsTasksController {
  constructor(private readonly studentsTasksService: StudentsTasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createStudentsTaskDto: CreateStudentsTaskDto) {
    return this.studentsTasksService.create(createStudentsTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.studentsTasksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsTasksService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsTasksService.remove(id);
  }
}
