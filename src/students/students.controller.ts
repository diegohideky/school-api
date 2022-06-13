/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsTasksService } from 'src/students-tasks/students-tasks.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guards';


@Controller('students')
export class StudentsController {
  
  constructor(
    private readonly studentsService: StudentsService,
    private readonly studentsTasksService: StudentsTasksService
  ) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/tasks')
  findTasks(@Param('id') id: string) {
    return this.studentsTasksService.findStudentsTasks(id);
  }
}
