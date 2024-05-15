import { Injectable } from "@angular/core";
import { User } from "../models/user";
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

    getLocalUser(): User {
        return this._user;
    }

    updateLocalUser(user: User) {
        this._user = user;
    }

    getUserFromAPI(): Observable<User> {
        return this.http.get<User>(this.endpoint);
    }

    updateUserInAPI(user: User): Observable<any> {
        return this.http.post<any>(this.endpoint + "/0", user);
    }
}