import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemInputComponent } from './todo-item-input.component';

describe('TodoItemInputComponent', () => {
  let component: TodoItemInputComponent;
  let fixture: ComponentFixture<TodoItemInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
