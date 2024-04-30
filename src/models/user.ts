import { Exam } from "./exam";

export class User{
    id:string = "";
    firstName:string = "";
    lastName:string = "";
    civility:Civility = Civility.M;
    phone:string = "";
    email:string = "";
    password:string = "";
    joined:Date;
    examsRegistered: Exam[] = [];

    constructor(){
        this.joined = new Date(Date.now());
    }
}

export enum Civility{
    M,
    Mme,
    Mlle
}