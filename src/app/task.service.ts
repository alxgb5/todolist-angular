import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
    
  }
    public getTask() {
      // return "test";
      return this.httpClient.get(`http://127.0.0.1:8000/api/task`);
    }

    public updateTask(task : Task) {
      return this.httpClient.put(`http://127.0.0.1:8000/api/edit/${task.id}`, task);
    }

    public deleteTask(id: number){
      return this.httpClient.delete(`http://127.0.0.1:8000/api/delete/${id}`);
  }
}
