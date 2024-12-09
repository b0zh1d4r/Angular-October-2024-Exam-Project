import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Course } from '../../types/course';
import { ApiService } from '../../api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  form = new FormGroup({
    courseTitle: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    startDate: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  course = {} as Course;

  constructor(
    private route: ActivatedRoute, 
    private apiService: ApiService,
    private router: Router // Inject Router
    ) {}

    ngOnInit(): void {
      const id = this.route.snapshot.params['courseId'];
  
      this.apiService.getSingleCourse(id).subscribe(course => {
        this.course = course;
      });
    }

    editCourse() {
      if (this.form.invalid) {
        return;
      }
      
      const id = this.route.snapshot.params['courseId'];
      const { courseTitle, description, startDate, imageUrl, price } = this.form.value;
        this.apiService.editCourse(id, courseTitle!, description!, startDate!, imageUrl!, price!).subscribe(() => {
          this.router.navigate([`/courses/${id}`]); // Navigate to another page after deletion
        })
    }
}
