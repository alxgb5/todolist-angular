import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  tasks;

  constructor(private taskService: TaskService) {

   }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data)=>{
      // this.tasks = data;
      console.log(data);
    })
  }

}
