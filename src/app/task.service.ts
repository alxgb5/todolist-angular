import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
    
  }
    public getTask() {
      return this.httpClient.get(`http://alex-laravel.local:8005/api/task`);
    }
}
