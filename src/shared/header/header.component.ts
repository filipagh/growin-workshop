import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthServiceService} from "../../services/auth-service.service";
import {filter} from "rxjs";

let notLoggedInText = "Not logged in";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedInText: string = notLoggedInText;

  constructor(authService: AuthServiceService) {
    authService.loggedIn$.pipe(filter((isLoggedIn) => isLoggedIn)).subscribe((isLoggedIn) => {

      this.loggedInText = isLoggedIn ? `Logged in as ${authService.username}` : notLoggedInText;
    })
  }


}
