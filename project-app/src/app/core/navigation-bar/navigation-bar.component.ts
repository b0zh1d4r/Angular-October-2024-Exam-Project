import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserForAuth } from "../../types/user";
import { UserService } from "../../user/user.service";

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  standalone: true,
})
export class NavigationBarComponent implements OnInit {
  loggedInUser: UserForAuth | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getUser();
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.loggedInUser = null; // Reset the user state
      this.router.navigate(['/login']);
    });
  }
}
