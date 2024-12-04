import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
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

    constructor(private userService: UserService) {};
}