import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedIn$ = new BehaviorSubject<boolean>(false);

  username = '';

  constructor(private router: Router) {
  }

  public login(username: string, password: string) {
    if (username === password) {
      this.username = username;
      this.loggedIn$.next(true);
      this.router.navigate(['todo-list']);
    } else {
      this.loggedIn$.next(false);
    }
  }
}
