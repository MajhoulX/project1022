// import { Exam, ExamType } from "./exam";
// import { FieldOfStudy } from "./fieldOfStudy";

// export class Faculty{
//     readonly name: string;
//     readonly fieldOfStudies: FieldOfStudy[];
//     themeColor: string;
//     constructor(name: string, theme: string, fields: FieldOfStudy[]){
//         this.name = name;
//         this.fieldOfStudies = fields;
//         this.themeColor = theme;
//     }
// }

// export const faculties: Faculty[] = [
//     new Faculty("College of Social Sciences", "#af2b31", [
//         new FieldOfStudy("Sciences Politiques", [
//             "Sciences Po Rabat"
//         ], [
//             new Exam(1, ExamType.Oral, new Date("03/03/2024")),
//             new Exam(2, ExamType.Oral, new Date("11/5/2024")),
//             new Exam(3, ExamType.Oral, new Date("14/6/2024")),
//             new Exam(4, ExamType.Oral, new Date("19/7/2024")),
//             new Exam(5, ExamType.Oral, new Date("22/8/2024"))
//         ]),
//         new FieldOfStudy("Droit des Affaires", [
//             "Ecole de Droit de Rabat"
//         ], [
//             new Exam(6, ExamType.Oral, new Date("2/3/2024")),
//             new Exam(7, ExamType.Oral, new Date("11/5/2024")),
//             new Exam(8, ExamType.Oral, new Date("14/6/2024")),
//             new Exam(9, ExamType.Oral, new Date("19/07/2024")),
//             new Exam(10, ExamType.Oral, new Date("22/08/2024"))
//         ]),
//         new FieldOfStudy("Communication et Médias", [
//             "Communication et Médias"
//         ], [
//             new Exam(11, ExamType.Oral, new Date("02/03/2024")),
//             new Exam(12, ExamType.Oral, new Date("11/05/2024")),
//             new Exam(13, ExamType.Oral, new Date("14/06/2024")),
//             new Exam(14, ExamType.Oral, new Date("19/07/2024")),
//             new Exam(15, ExamType.Oral, new Date("22/08/2024"))
//         ])
//     ]),
//     new Faculty("College of Engineering & Architecture", "#7a57ce", [
//         new FieldOfStudy("Concours commun d'ingénierie", [
//             "Ecole Supérieure d’Informatique et du Numérique",
//             "Ecole Supérieure d'Ingénierie de l'Energie",
//             "School of Aerospace & Automotive Engineering"
//         ], [
//             new Exam(16, ExamType.Oral, new Date("18/53/2024")),
//             new Exam(17, ExamType.Oral, new Date("23/06/2024")),
//             new Exam(18, ExamType.Oral, new Date("15/07/2024")),
//             new Exam(19, ExamType.Oral, new Date("30/08/2024"))
//         ]),
//         new FieldOfStudy("Architecture", [
//             "Ecole Supérieure d'Architecture de Rabat"
//         ], [
//             new Exam(20, ExamType.Oral, new Date("19/05/2024")),
//             new Exam(21, ExamType.Oral, new Date("22/06/2024")),
//             new Exam(22, ExamType.Oral, new Date("16/07/2024")),
//             new Exam(23, ExamType.Oral, new Date("29/08/2024"))
//         ])
//     ]),
//     new Faculty("College of Management", "#3090c7", [
//         new FieldOfStudy("International Program in Management", [
//             "Rabat Business School"
//         ], [

//         ])
//     ]),
//     new Faculty("College of Health Sciecnces", "#588a73", [
//         new FieldOfStudy("Licence Professionnelle - Infirmier Polyvalent", [
//             "Ecole Supérieure des Sciences",
//             "Paramédicales de Rabat"
//         ], [
//             new Exam(24, ExamType.Oral, new Date("07/05/2024"))
//         ]),
//         new FieldOfStudy("Infirmier en Anesthésie et Réanimation", [
//             "Ecole Supérieure des Sciences",
//             "Paramédicales de Rabat"
//         ], [
//             new Exam(28, ExamType.Oral, new Date("07/05/2024"))
//         ]),
//         new FieldOfStudy("Licence en Diététique et Nutrition", [
//             "Ecole Supérieure des Sciences",
//             "Paramédicales de Rabat"
//         ], [
//             new Exam(26, ExamType.Oral, new Date("22/08/2024"))
//         ])
//     ])
// ];

import { Exam, ExamType } from "./exam";
import { FieldOfStudy } from "./fieldOfStudy";

export class Faculty {
    readonly name: string;
    readonly fieldOfStudies: FieldOfStudy[];
    themeColor: string;
    constructor(name: string, theme: string, fields: FieldOfStudy[]) {
        this.name = name;
        this.fieldOfStudies = fields;
        this.themeColor = theme;
    }
}

export const faculties: Faculty[] = [
    new Faculty("College of Social Sciences", "#af2b31", [
        new FieldOfStudy("Sciences Politiques", [
            "Sciences Po Rabat"
        ], [
            new Exam(1, ExamType.Oral, new Date("03/03/2024")),
            new Exam(2, ExamType.Oral, new Date("05/11/2024")),
            new Exam(3, ExamType.Oral, new Date("06/14/2024")),
            new Exam(4, ExamType.Oral, new Date("07/19/2024")),
            new Exam(5, ExamType.Oral, new Date("08/22/2024"))
        ]),
        new FieldOfStudy("Droit des Affaires", [
            "Ecole de Droit de Rabat"
        ], [
            new Exam(6, ExamType.Oral, new Date("03/02/2024")),
            new Exam(7, ExamType.Oral, new Date("05/11/2024")),
            new Exam(8, ExamType.Oral, new Date("06/14/2024")),
            new Exam(9, ExamType.Oral, new Date("07/19/2024")),
            new Exam(10, ExamType.Oral, new Date("08/22/2024"))
        ]),
        new FieldOfStudy("Communication et Médias", [
            "Communication et Médias"
        ], [
            new Exam(11, ExamType.Oral, new Date("03/02/2024")),
            new Exam(12, ExamType.Oral, new Date("05/11/2024")),
            new Exam(13, ExamType.Oral, new Date("06/14/2024")),
            new Exam(14, ExamType.Oral, new Date("07/19/2024")),
            new Exam(15, ExamType.Oral, new Date("08/22/2024"))
        ])
    ]),
    new Faculty("College of Engineering & Architecture", "#7a57ce", [
        new FieldOfStudy("Concours commun d'ingénierie", [
            "Ecole Supérieure d’Informatique et du Numérique",
            "Ecole Supérieure d'Ingénierie de l'Energie",
            "School of Aerospace & Automotive Engineering"
        ], [
            new Exam(16, ExamType.Oral, new Date("53/18/2024")),
            new Exam(17, ExamType.Oral, new Date("06/23/2024")),
            new Exam(18, ExamType.Oral, new Date("07/15/2024")),
            new Exam(19, ExamType.Oral, new Date("08/30/2024"))
        ]),
        new FieldOfStudy("Architecture", [
            "Ecole Supérieure d'Architecture de Rabat"
        ], [
            new Exam(20, ExamType.Oral, new Date("05/19/2024")),
            new Exam(21, ExamType.Oral, new Date("06/22/2024")),
            new Exam(22, ExamType.Oral, new Date("07/16/2024")),
            new Exam(23, ExamType.Oral, new Date("08/29/2024"))
        ])
    ]),
    new Faculty("College of Management", "#3090c7", [
        new FieldOfStudy("International Program in Management", [
            "Rabat Business School"
        ], [

        ])
    ]),
    new Faculty("College of Health Sciences", "#588a73", [
        new FieldOfStudy("Licence Professionnelle - Infirmier Polyvalent", [
            "Ecole Supérieure des Sciences",
            "Paramédicales de Rabat"
        ], [
            new Exam(24, ExamType.Oral, new Date("05/07/2024"))
        ]),
        new FieldOfStudy("Infirmier en Anesthésie et Réanimation", [
            "Ecole Supérieure des Sciences",
            "Paramédicales de Rabat"
        ], [
            new Exam(28, ExamType.Oral, new Date("05/07/2024"))
        ]),
        new FieldOfStudy("Licence en Diététique et Nutrition", [
            "Ecole Supérieure des Sciences",
            "Paramédicales de Rabat"
        ], [
            new Exam(26, ExamType.Oral, new Date("08/22/2024"))
        ])
    ])
];
