import { Exam } from "./exam";

export class UserExam{
    exam: Exam;
    result: number;
    registeredDate: Date = new Date();
    constructor(exam: Exam, result: number = 0){
        this.exam = exam;
        this.result = result;
    }
}