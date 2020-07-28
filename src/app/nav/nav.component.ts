import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service'
import { Task } from '../task';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  template: `
  <input type="text">  
  <textarea>`
})

export class NavComponent implements OnInit {
  tasks;
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  taskCreate(task)
  {
    task = { "title" : this.titleControl.value, "description" : this.descriptionControl.value};
    this.taskService.createTask(task).subscribe((res) => {
      console.log("tâche créé");
    });
  }

}
