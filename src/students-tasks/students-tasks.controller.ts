import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { omit } from 'lodash';
import { StudentsTasksService } from './students-tasks.service';
import { CreateStudentsTaskDto } from './dto/create-students-task.dto';
import { UpdateStudentsTaskDto } from './dto/update-students-task.dto';

@Controller('students-tasks')
export class StudentsTasksController {
  constructor(private readonly studentsTasksService: StudentsTasksService) { }

  @Post()
  create(@Body() createStudentsTaskDto: CreateStudentsTaskDto) {
    const studentsTasks = createStudentsTaskDto.selectedIds.map((studentId) => ({
      student: studentId,
      ...omit(createStudentsTaskDto, ['selectedIds'])
    }))
    return this.studentsTasksService.create(studentsTasks);
  }

  @Get()
  findAll() {
    return this.studentsTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsTasksService.findOne(id);
  }
}
