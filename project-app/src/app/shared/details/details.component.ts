import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; // Import Router
import { Course } from '../../types/course';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Fixed property name
})
export class DetailsComponent implements OnInit {
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

  deleteCourse(): void {
    const id = this.route.snapshot.params['courseId'];

    if (confirm('Are you sure you want to delete this course?')) {
      this.apiService.deleteCourse(id).subscribe(() => {
        this.router.navigate(['/courses']); // Navigate to another page after deletion
      })
    }
  }
}

