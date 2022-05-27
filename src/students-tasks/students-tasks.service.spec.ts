/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { StudentsTasksService } from './students-tasks.service';

describe('StudentsTasksService', () => {
  let service: StudentsTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsTasksService],
    }).compile();

    service = module.get<StudentsTasksService>(StudentsTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
