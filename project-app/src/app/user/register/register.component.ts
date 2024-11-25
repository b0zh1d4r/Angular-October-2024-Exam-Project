// import { Component, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { MinCountDirective } from '../../directives/min-count.directive';
// import { MaxCountDirective } from '../../directives/max-count.directive';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [RouterLink, FormsModule, MinCountDirective, MaxCountDirective],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {
//   @ViewChild('registerForm') form: NgForm | undefined;

//   minCountNumberUsername = 2;
//   minCountNumberEmail = 10;
//   minCountNumberPassword = 4;

//   maxCountNumberUsername = 20;

//   formSubmitHandler() {
//     const form = this.form!;

//     if (form?.invalid) {
//       return;
//     }

//     form.reset();
//   }
// }

import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { emailValidator } from "../../utils/email.validator";
import { DOMAINS } from "../../constants";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rePassword: new FormControl('', [Validators.required]),
    })
  });

  register() {
    if (this.form.invalid) {
      return;
    }
  }
}
