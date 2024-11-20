import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Course } from './types/course';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCourses() {
    const { apiUrl } = environment
    return this.http.get<Course[]>(`${apiUrl}/courses`);
    // return this.http.get<Course[]>(`${apiUrl}/courses.json`);
  }
}
