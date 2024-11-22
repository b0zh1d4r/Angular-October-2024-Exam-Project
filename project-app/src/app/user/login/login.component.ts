import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MinCountDirective } from '../../directives/min-count.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, MinCountDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  minCountNumber = 4;

  formSubmitHandler() {
    const form = this.form!;

    if (form?.invalid) {
      return;
    }

    form.reset();
  }
}
