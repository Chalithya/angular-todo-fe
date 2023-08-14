import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addTask(title: string, description: string): Observable<any> {
    return this.http.post(this.apiUrl, {
      title: title,
      description: description,
      completed: false,
    });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  markTaskCompleted(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { completed: true });
  }
}
