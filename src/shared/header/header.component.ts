import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthServiceService} from "../../services/auth-service.service";

let notLoggedIn = "Not logged in";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedInText: string = notLoggedIn;

  constructor(authService: AuthServiceService) {
    authService.loggedIn$.subscribe((isLoggedIn) => {

      this.loggedInText = isLoggedIn ? `Logged in as ${authService.username}` : notLoggedIn;
    })
  }


}
