import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-nine/core-data';

@Component({
  selector: 'mdv-twenty-nine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { path: '/pizza', icon: 'work', title: 'Pizzas' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
