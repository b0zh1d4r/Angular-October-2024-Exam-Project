import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { UserService } from "../../user/user.service";

@Component({
    selector: 'app-navigation-bar',
    imports: [RouterLink],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.css',
    standalone: true,
})
export class NavigationBarComponent {
    get isLoggedIn(): boolean {          
        return this.userService.isLogged;
    }
    constructor(private userService: UserService, private router: Router) {};

    logout() {
        this.userService.logout().subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
}