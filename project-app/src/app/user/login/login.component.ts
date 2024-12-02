import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";
import { emailValidator } from "../../utils/email.validator";
import { DOMAINS } from "../../constants";
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      }
    )
  });

  login() {
    if (this.form.invalid) {
      return;
    }
  
    const email = this.form.value.email as string;
    const password = this.form.get('passGroup.password')?.value as string;
  
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
  
}
