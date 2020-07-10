import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form-component',
  templateUrl: './simple-form-component.component.html',
  styleUrls: ['./simple-form-component.component.scss'],
  template:`
  <input type="text">  
  <textarea>`
})
export class SimpleFormComponentComponent implements OnInit {

  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    
  }

  test()
  {
    console.log(this.titleControl.value);
    console.log(this.descriptionControl.value);
    
  }

}
