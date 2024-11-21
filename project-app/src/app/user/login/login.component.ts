import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaxCountDirective } from '../../directives/max-count.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, MaxCountDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  maxCountNumber = 4;

  formSubmitHandler() {
    if (this.form?.invalid) {
      console.log('This form is invalid!');
      return;
    }

    console.log(this.form?.value);
  }
}
