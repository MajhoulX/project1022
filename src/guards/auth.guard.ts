import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { Observable, map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> => {
  const usrSrv = inject(UserService);
  const router = inject(Router);
  console.log("trying to access portal");
  return usrSrv.user.pipe(take(1), map((user) => {
    if (user) {
      console.log("portal accessed");
      return true;
    } else {
      console.log("portal denied");
      return router.createUrlTree(["/login"]);
    }
  }));
};
