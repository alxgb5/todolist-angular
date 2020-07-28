import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {
    
  }
    public getTask() {
      // return "test";
      return this.httpClient.get(`http://127.0.0.1:8001/api/task`);
    }

    public updateTask(task : Task) {
      let id = task.id;
      return this.httpClient.put(`http://127.0.0.1:8001/api/edit/${id}`, task);
    }

    public createTask(task : Task){
      // console.log(task);
      
      return this.httpClient.post(`http://127.0.0.1:8001/api/create`, task);
    }

    public deleteTask(id: number){
      return this.httpClient.delete(`http://127.0.0.1:8001/api/delete/${id}`);
  }

  public featureCreate(task : Task)
  {
    return this.httpClient.post(`http://127.0.0.1:8001/api/features/create`, task)
  }

  public featureUpdate(feature : Feature, task : Task)
  {
    console.log(task)
    console.log(feature)
    let id = task.id;
    
    // return this.httpClient.post(`http://127.0.0.1:8001/api/features/edit/${id}`, task)
  }

  public featureDelete(id : number)
  { 
    return this.httpClient.delete(`http://127.0.0.1:8001/api/features/delete/${id}`); 
  }
}