import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { Observable, map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> => {
  const usrSrv = inject(UserService);
  const router = inject(Router);

  return usrSrv.user.pipe(take(1), map((user) => {
    if (!user) {
      return router.createUrlTree(["/login"]);
    }

    if (route.url[0].path == 'onboarding') {
      return user.completedOnboarding ? router.createUrlTree(["/dashboard"]) : true;
    }
    else {
      return user.completedOnboarding ? true : router.createUrlTree(["/onboarding"]);
    }
  }));
};
