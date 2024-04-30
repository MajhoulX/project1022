export interface Link {
    route: string;
    displayText: string;
    isActive: boolean;
    icon: string;
}

export interface Links {
    title: string;
    links: Link[];
}

export const links: Links[] = [
    {
        title: "Candidature",
        links: [
            { route: "dashboard/programmes", displayText: "Mes Programmes", isActive: false, icon: "" },
            { route: "dashboard/frais", displayText: "Frais de concours", isActive: false, icon: "" },
            { route: "dashboard/choix", displayText: "Choix & Convocations", isActive: false, icon: "" },
            { route: "dashboard/inscription", displayText: "Inscription", isActive: false, icon: "" }
        ]
    },
    {
        title: "Cursus",
        links: [
            { route: "dashboard/cursus", displayText: "Mon cursus", isActive: false, icon: "" },
            { route: "dashboard/profil", displayText: "Profil", isActive: false, icon: "" }
        ]
    }
]