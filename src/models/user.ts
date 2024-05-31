import { Payment } from "./payment";
import { UserExam } from "./userExam";

export class User {
    id: string = "";
    firstName: string = "";
    lastName: string = "";
    civility: string = "";
    phoneNumber: string = "";
    email: string = "";
    cin: string = "";
    passportNumber: string = "";
    nationality: string = "";
    address: string = "";
    residentState: string = "";
    residentCountry: string = "";
    massar: string = "";
    educationLevel: string = "";
    educationSystem: string = "";
    educationSystemCountry: string = "";
    bacSerie: string = "";
    bacOption: string = "";
    bacLevel: string = "";
    bacInstitution: string = "";
    bacInstitutionName: string = "";
    bacAcquisitionYear: number | null = null;
    bacAverageScore: number | null = null;
    seniorYearEnglishGrade: number | null = null;
    seniorYearMathematicsGrade: number | null = null;
    seniorYearPhysicsGrade: number | null = null;
    finalSchoolYearScore: number | null = null;
    regionalExamScore: number | null = null;
    nationalExamScore: number | null = null;
    password: string | null = null;
    joined: Date = new Date();
    completedOnboarding: boolean = false;
    birthDate: Date | null = null;
    examsRegistered: UserExam[] = [];
    payments: Payment[] = [];
};

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