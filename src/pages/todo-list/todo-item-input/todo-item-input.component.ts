import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoItemNew} from "../../../types/TodoItemNew";
import {TodosService} from "../../../services/todos.service";

@Component({
  selector: 'app-todo-item-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item-input.component.html',
  styleUrl: './todo-item-input.component.css'
})
export class TodoItemInputComponent {
  todoItemForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todoItemForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit() {
    if (this.todoItemForm.valid) {
      this.todosService.addNewTodo( new TodoItemNew(this.todoItemForm.value.name, this.todoItemForm.value.description))
      this.todoItemForm.reset();
    }
  }
}
