import { Component, OnInit, OnChanges } from '@angular/core';
import { TaskService } from '../task.service'
import { FormControl, Validators } from '@angular/forms';

// import { Task } from '../task';
// import { Feature } from '../feature';
import { __values } from 'tslib';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  template: `
  `
})
export class CardComponent implements OnInit, OnChanges {
  tasks;
  features;
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl();
  taskControl = new FormControl();
  editControl = new FormControl();

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data) => {
      this.tasks = data;
    })
  }

  ngOnChanges(): void {
  }

  taskDelete(id) {
    this.taskService.deleteTask(id).subscribe((res) => {
      console.log("La tâche est supprimée");
    });
  };

  taskUpdate(task) {
    
    console.log(task)
    task = { "id": task.id, "title": this.titleControl.value, "description": this.descriptionControl.value }
    this.taskService.updateTask(task).subscribe((res) => {
      console.log("Tâche mise à jours");
    });
  }

  featureCreate(task)
  {
    let feature = { "name" : this.nameControl.value, "task" : task.id };
    this.taskService.featureCreate(feature).subscribe((res)=> {
      console.log("Feature créée")
    })
  }

  featureUpdate(feature)
  {
    // console.log("test");
    console.log(this.editControl.value);
    
    console.log(task.id)
    feature = {"name": this.editControl.value ,"task": task.id};
    console.log(feature)
    // this.taskService.featureUpdate(feature,task).subscribe((res)=> {
    //   console.log("Modification de la tâche")
    // })
    
  }

  featureDelete(id)
  {
    this.taskService.featureDelete(id).subscribe((res)=> {
      console.log("feature supprimé");   
    })
    
  }
}