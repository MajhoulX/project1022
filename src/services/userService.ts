import { Injectable } from "@angular/core";
import { User, emptyUser } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: User;

    constructor() {
        this._user = emptyUser;
    }

    get getUser(): User {
        return this._user;
    }

    updateUser(user: User) {
        this._user = user;
    }
}