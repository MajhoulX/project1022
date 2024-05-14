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
    educationLevel: string = "Bac obtenu";
    educationSystem: string = "Marocain";
    educationSystemCountry: string = "Marocain";
    bacSerie: string = "Sciences Mathématiques";
    bacOption: string = "Sciences Mathématiques A";
    bacLevel: string = "Terminale";
    bacInstitution: string = "Public";
    bacInstitutionName: string = "EST Agadir";
    bacAcquisitionYear: number | null = 2021;
    bacAverageScore: number | null = 12;
    seniorYearEnglishGrade: number | null = 12;
    seniorYearMathematicsGrade: number | null = 12;
    seniorYearPhysicsGrade: number | null = 12;
    finalSchoolYearScore: number | null = 12;
    regionalExamScore: number | null = 12;
    nationalExamScore: number | null = 12;
    password: string | null = "noidkhalil";
    joined: Date = new Date();
    birthDate: Date | null = new Date("02/28/2003");
    examsRegistered: UserExam[] = [

    ];
    payments: Payment[] = [
        new Payment(750),
        new Payment(1500),
        new Payment(1500)
    ];
};

export const emptyUser: User = {
    id: "",
    firstName: "",
    lastName: "",
    civility: "",
    phone: "",
    email: "",
    cin: "",
    passportNumber: "",
    nationality: "",
    address: "",
    residentState: "",
    residentCountry: "",
    massar: "",
    educationLevel: "",
    educationSystem: "",
    educationSystemCountry: "",
    bacSerie: "",
    bacOption: "",
    bacLevel: "",
    bacInstitution: "",
    bacInstitutionName: "",
    bacAcquisitionYear: null,
    bacAverageScore: null,
    seniorYearEnglishGrade: null,
    seniorYearMathematicsGrade: null,
    seniorYearPhysicsGrade: null,
    finalSchoolYearScore: null,
    regionalExamScore: null,
    nationalExamScore: null,
    password: null,
    joined: new Date(),
    birthDate: null,
    examsRegistered: [],
    payments: []
}

export class Serie {
    name: string;
    options: string[];
    constructor(name: string, options: string[]) {
        this.name = name;
        this.options = options;
    }
};


export class EducationSystem{
    name: string;
    series: Serie[];
    constructor(name:string, series: Serie[]){
        this.name = name;
        this.series = series;
    }
};

export const educationSystems: EducationSystem[] = [
    new EducationSystem("Marocain", [
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
    ]),
    new EducationSystem("Mission (Française)", [
        new Serie("Général",[
            "Sciences économiques et sociales, Mathématiques",
            "Physique-Chimie, Sciences de la vie et de la terre",
            "Arts, Arts plastiques et Mathématiques",
            "Histoire-géographie, géopolitique et sciences politiques, Langues, Littérature et cultures étrangères et régionales (Anglais)",
            "Langues, littératures et cultures étrangères et régionales(Anglais, monde contemporain), Sciences de la vie et de la terre",
            "Langues, littératures et cultures étrangères et régionales(Anglais, monde contemporain), Mathématiques",
            "Langues, littératures et cultures étrangères et régionales(Anglais, ), Sciences de la vie et de la terre",
            "Sciences économiques et sociales, Mathématiques, Histoire-géographie, géopolitique et sciences politiques",
            "Sciences économiques et sociales, Mathématiques, Langues, littératures et cultures étrangères et régionales (Anglais)",
            "Mathématiques, Numérique et sciences informatiques",
            "Mathématiques, Physique-chimie",
            "Mathématiques , Sciences de la vie et de la terre",
            "Histoire-géographie, géopolitique et sciences politiques, Langues, Littérature et cultures étrangères et régionales (Anglais)"
        ]),
        new Serie("Technologique", [
            "Sciences et Technologies de l'Industrie et du Développelemnt Durable (STI2D)",
            "Sciences et Technologies du Management et de la Gestion"
        ])
    ]),
    new EducationSystem("Mission (Espagnole, belge)", [
        new Serie("Général", [
            "Scientifique",
            "Technique",
            "Economie",
            "Littéraire"
        ])
    ]),
    new EducationSystem("Etranger", [
        new Serie("Général", [
            "Scientifique",
            "Technique",
            "Economie",
            "Littéraire"
        ])
    ])
];

export const educationLevels: string[] = [
    "Bac obtenu",
    "En année terminale du Bac"
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

export const civilities: string[] = [
    "M",
    "Mlle",
    "Mme"
];