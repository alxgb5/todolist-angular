import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormComponentComponent } from './simple-form-component.component';

describe('SimpleFormComponentComponent', () => {
  let component: SimpleFormComponentComponent;
  let fixture: ComponentFixture<SimpleFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
