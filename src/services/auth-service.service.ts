import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  username = '';

  constructor(private router: Router) {
  }

  public login(username: string, password: string) {
    if (username === 'a' && password === 'a') {
      this.username = username;
      this.loggedIn.next(true);
      this.router.navigateByUrl("/todo-list");
    }
    this.loggedIn.next(false);
  }
}
