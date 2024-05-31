export class Faculty {
    name: string = '';
    fieldOfStudies: FieldOfStudy[] = [];
}

export class FieldOfStudy {
    name: string = '';
    institutions: string[] = [];
    exams: Exam[] = [];
}

export class Exam {
    id: number = 0;
    name: string = '';
}

export class ExamRegisteration{
    examIds: number[] = [];
}