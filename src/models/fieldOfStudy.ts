import { Exam } from "./exam";

export class FieldOfStudy {
    name: string;
    institutions: string[];
    exams: Exam[];
    constructor(name: string, institutions: string[], sessions: Exam[]){
        this.name = name;
        this.institutions = institutions;
        this.exams = sessions;
    }
}