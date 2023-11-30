import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string = "";
  constructor(authService: AuthServiceService) {
    authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.username = authService.username;
    })
  }



}
