export class CreateStudentsTaskDto {
    selectedIds: string[];
    task: string;
    datetime: Date;
    score: number;
    text?: string;
}

export class StudentsTaskDto {
    student: string;
    task: string;
    datetime: Date;
    score: number;
    text?: string;
}
