import { Injectable, inject } from "@angular/core";
import { User } from "../models/user";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, catchError, of, tap, throwError } from "rxjs";
import { SignupCredential } from "../app/signup/signup.model";
import { LoginCredential } from "../app/login/login.model";
import { Onboarding } from "../app/onboarding/onboarding.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user = new BehaviorSubject<User | null>(null);
    
    private _user = new User();
    private http: HttpClient = inject(HttpClient);
    private authEndpoint: string = "http://localhost:5213/api/auth";
    private userEndpoint: string = "http://localhost:5213/api/user";

    login(cred: LoginCredential): Observable<User> {
        return this.http.post<User>(this.authEndpoint, cred).pipe(
            tap({
                next: (user) => {
                    this.user.next(user);
                }
            })
        );
    }

    signup(cred: SignupCredential) {
        return this.http.post<User>(this.authEndpoint + "/signup", cred).pipe(
            catchError((err) => {
                const e = err.error.error;
                return throwError(() => e);
            }),
            tap({
                next: (user) => {
                    this.user.next(user);
                }
            })
        );
    }

    onboard(onboard: Onboarding) {
        return this.http.post<User>(this.userEndpoint + "/onboarding", onboard).pipe(
            catchError((err) => {
                console.error(err);
                const e = err.error.error;
                return throwError(() => e);
            }),
            tap({
                next: (user) => {
                    this.user.next(user);
                }
            })
        );
    }

    getLocalUser(): User {
        return this._user;
    }

    updateLocalUser(user: User) {
        this._user = user;
    }

    updateUserInAPI(user: User): Observable<any> {
        return this.http.post<any>(this.userEndpoint + '/1', user, {
            
        });
    }
}