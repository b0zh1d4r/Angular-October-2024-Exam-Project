import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
  standalone: true,
})
export class NavigationBarComponent {
<<<<<<< HEAD
  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
=======
    get isLoggedIn(): boolean {          
        return this.userService.isLogged;
    }
    constructor(private userService: UserService, private router: Router) {};
>>>>>>> 9e4fc5ab076d854955343499f8196f1c07ad5449

  logout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
