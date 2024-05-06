import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: User;
    id: number;

    constructor(){
        this._user = new User();
        this.id = Math.floor(Math.random() * 500);
    }

    get getUser(): User {
        return this._user;
    }
    updateUser(user: User){
        this._user = user;
    }
}