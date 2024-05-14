import { Injectable } from "@angular/core";
import { User, emptyUser } from "../models/user";
import { Console } from "console";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: User = new User();
    private endpoint: string = "http://localhost:5213/api/user";

    constructor(private http: HttpClient) {
    }

    getUser(): Observable<User> {
        return of(this._user);
        //return this.http.get<User>(this.endpoint);
    }

    setUser(user: User) : Observable<any> {
        this._user = user;
        return of();
        //return this.http.post<any>(this.endpoint + "/0", user);
    }
}