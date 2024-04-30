export class Exam{
    id:number;
    type:ExamType;
    date:Date;
    constructor(id: number, type: ExamType, date: Date){
        this.id = id;
        this.type = type;
        this.date = date;
    }
}

export enum ExamType{
    Oral,
    Written
}