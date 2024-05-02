import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: User = new User();
    get user(): User {
        return this._user;
    }
}