import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { LoginCredential } from "../models/loginCredential";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private endpoint: string = "http://localhost:5213/api/auth";

    constructor(private http: HttpClient){

    }

    login(cred: LoginCredential, callback: ()=>{}){
        this.http.post<any>(this.endpoint, cred).subscribe(
            
        );
    }

    isAuthenticated(): Observable<any> {
        const cred: string | null = localStorage.getItem("cred");
        if (!cred) {
            return of(false);
        }

        const val = JSON.parse(cred) as LoginCredential | undefined;
        if(!val){
            return of(false);
        }

        return this.http.post<any>(this.endpoint, cred);
    }
}