import { HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, exhaustMap, take } from "rxjs";
import { UserService } from "./user.service";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    let userService = inject(UserService);
    return userService.user.pipe(
        take(1),
        exhaustMap(user => {
            if (user) {
                return next(req.clone({
                    headers: new HttpHeaders().set('Authorization', "Basic " + btoa(user.email + ":" + user.password))
                }));
            }

            return next(req);
        })
    )
}
