import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "../../services/auth-service.service";

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  if (authService.loggedIn.value) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};
