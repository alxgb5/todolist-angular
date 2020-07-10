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
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

}
