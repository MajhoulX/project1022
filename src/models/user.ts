import { Payment } from "./payment";
import { UserExam } from "./userExam";

export class User {
    id: string = "#2425-08882";
    firstName: string = "Khalil";
    lastName: string = "Hashim";
    civility: string = "M";
    phone: string = "0769052353";
    email: string = "khahas@gmail.com";
    cin: string = "J553295";
    passportNumber: string = "X553295";
    nationality: string = "Morocco";
    address: string = "n145 imm 9 Inbiaat 3";
    residentState: string = "Agadir";
    residentCountry: string = "Morocco";
    massar: string = "J54634";
    bacStudySystem: string = "Marocain";
    bacSerie: string = "Sciences Mathématiques";
    bacOption: string = "Sciences Mathématiques A";
    bacLevel: string = "Terminale";
    bacInstitution: string = "Public";
    bacInstitutionName: string = "EST Agadir";
    bacAcquisitionYear: number = 2021;
    bacAverageScore: number = 12;
    seniorYearEnglishGrade: number = 12;
    seniorYearMathematicsGrade: number = 12;
    seniorYearPhysicsGrade: number = 12;
    finalSchoolYearScore: number = 12;
    regionalExamScore: number = 12;
    nationalExamScore: number = 12;
    password: string = "noidkhalil";
    joined: Date = new Date();

    birthDate: Date = new Date("02/28/2003");
    examsRegistered: UserExam[] = [

    ];
    payments: Payment[] = [
        new Payment(750),
        new Payment(1500),
        new Payment(1500)
    ];
};

export const civilities: string[] = [
    "M",
    "Mlle",
    "Mme"
];

export const studySystems: string[] = [
    "Marocain",
    "Mission (Française)",
    "Mission (Espagnole, belge)",
    "Etranger"
];

export const studyLevels: string[] = [
    "Bachelier",
    "Bac+1",
    "Bac+2",
    "Bac+3",
    "Bac+4",
    "Bac+5"
];

export const bacInstitutionTypes: string[] = [
    "Privé",
    "Public"
];


export class Serie{
    name: string;
    options: string[];
    constructor(name: string, options: string[]){
        this.name = name;
        this.options = options;
    }
}

export const seriesType: Serie[] = [
    new Serie("Sciences Mathématiques", [
        "Sciences Mathématiques A",
        "Sciences Mathématiques B",
    ]),
    new Serie("Sciences Expérimentales", [
        "Sciences de la vie et de la Terre",
        "Sciences Physiques et Chimiques",
        "Sciences Agronomiques",
    ]),
    new Serie("Lettres et Sciences Humaines", [
        "Lettres",
        "Sciences Humaines"
    ]),
    new Serie("Sciences et Technologies", [
        "Sciences et Technologies Méchaniques",
        "Sciences et Technologies Eléctriques",
        "Sciences et Technologies Métalliques"
    ]),
    new Serie("Sciences Economiques et de Gestion", [
        "Sciences Economiques",
        "Sciences de gestion et comptabilité"
    ]),
    new Serie("Art Appliqués", [
        "Art Appliqués"
    ])   
];