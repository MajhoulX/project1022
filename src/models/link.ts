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