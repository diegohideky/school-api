/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsTaskDto } from './create-students-task.dto';

export class UpdateStudentsTaskDto extends PartialType(CreateStudentsTaskDto) {}
