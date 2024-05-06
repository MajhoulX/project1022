export class Exam{
    id:number;
    type:ExamType;
    date:Date;
    status:ExamStatus;
    result:number | undefined;
    constructor(id: number, type: ExamType, date: Date,  status:ExamStatus = ExamStatus.InProgress){
        this.id = id;
        this.type = type;
        this.date = date;
        this.status = status;
    }
}

export enum ExamType{
    Oral,
    Written
}

export enum ExamStatus{
    InProgress,
    Complete
}