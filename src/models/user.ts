import { Exam } from "./exam";

export class User{
    id:string = "#2425-08882";
    firstName:string = "Khalil";
    lastName:string = "Hashim";
    civility:string = "M";
    phone:string = "0777052353";
    email:string = "khahas@gmail.com";
    cin:string = "J553295";
    passportNumber:string = "J553295";
    nationality:string = "Marocaine";
    address:string = "n145 imm 9 Inbiaat 3";
    residentState:string = "Agadir";
    residentCountry:string = "Morocco";
    massar:string = "J54634";
    bacStudySystem:string = "Marocain";
    bacSerie:string = "Sciences Mathématiques";
    bacOption:string = "Sciences Mathématiques A";
    bacLevel:string = "Terminale";
    bacInstitution:string = "Public";
    seniorYearEnglishGrade:number = 12;
    seniorYearMathematicsGrade:number = 12;
    seniorYearPhysicsGrade:number = 12;
    regionalExamScore:number = 12;
    password:string = "noidkhalil";
    joined:Date;
    birthDate:Date = new Date("2/28/2003");
    examsRegistered: Exam[] = [];

    constructor(){
        this.joined = new Date(Date.now());
    }
}