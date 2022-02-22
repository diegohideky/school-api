import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { omit } from 'lodash';
import { StudentsTasksService } from './students-tasks.service';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('students-tasks')
export class StudentsTasksController {
  constructor(private readonly studentsTasksService: StudentsTasksService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createStudentsTaskDto: CreateStudentsTaskDto) {
    const studentsTasks = createStudentsTaskDto.selectedIds.map((studentId) => ({
      student: studentId,
      ...omit(createStudentsTaskDto, ['selectedIds'])
    }))
    return this.studentsTasksService.create(studentsTasks);
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
}
