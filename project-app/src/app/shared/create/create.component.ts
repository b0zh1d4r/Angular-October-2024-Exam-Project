import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  form = new FormGroup({
    courseTitle: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    startDate: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  constructor(private apiService: ApiService, private router: Router) { }

  createCourse() {
    
    if (this.form.invalid) {
      console.log(this.form);
      return;
    }

    const { courseTitle, description, startDate, imageUrl, price } = this.form.value;
    this.apiService.createCourse(courseTitle!, startDate!, price!, imageUrl!, description!).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }
}
