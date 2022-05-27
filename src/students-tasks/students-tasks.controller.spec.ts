/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { StudentsTasksController } from './students-tasks.controller';
import { StudentsTasksService } from './students-tasks.service';

describe('StudentsTasksController', () => {
  let controller: StudentsTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsTasksController],
      providers: [StudentsTasksService],
    }).compile();

    controller = module.get<StudentsTasksController>(StudentsTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
