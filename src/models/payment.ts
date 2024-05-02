export class Payment {
    amount: number = 0;
    date: Date = new Date();
    constructor(amount:number){
        this.amount = amount;
    }
}