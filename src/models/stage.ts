export class Stage{
    name:string;
    description:string;
    order: number;
    private _isComplete:boolean = false;
    public get isComplete(){
        return this._isComplete;
    }

    constructor(name: string, description:string, order:number = 0){
        this.description = description;
        this.name = name;
        this.order = order;
    }

    complete(): void {
        this._isComplete = true;
    }
}

export const stages: Stage[] = [
    new Stage("Cursus", "Information et cursus", 1),
    new Stage("Programmes", "Choix de programmes", 2),
    new Stage("Frais de concours", "Paiement des frais", 3),
    new Stage("Convocation", "Génération de la convocation", 4),
    new Stage("Admission", "Résultats de concours", 5),
    new Stage("Préinscription", "Au programme de l'UIR", 6),
    new Stage("Inscription", "Au programme de l'UIR", 7)
]

stages[0].complete();