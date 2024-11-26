import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { emailValidator } from "../../utils/email.validator";
import { DOMAINS } from "../../constants";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
  }
}
