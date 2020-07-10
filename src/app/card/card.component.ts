import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'
import { FormControl, Validators } from '@angular/forms';
import { Task } from '../task';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  template: `
  <input type="text">  
  <textarea>`
})
export class CardComponent implements OnInit {
  tasks;
  features;
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data) => {
      this.tasks = data;
    })
  }

  taskDelete(id) {
    this.taskService.deleteTask(id).subscribe((res) => {
      console.log("La tâche est supprimée");
    });
  };

  taskUpdate(task) {
    task = { "id": task.id, "title": this.titleControl.value, "description": this.descriptionControl.value }
    this.taskService.updateTask(task).subscribe((res) => {
      console.log("Tâche mise à jours");
    });
  }
}
