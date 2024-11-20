import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void   {
    this.apiService.getCourses().subscribe((courses) => {
      console.log(courses);
    });
  }
}
