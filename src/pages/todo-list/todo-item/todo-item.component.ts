import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItem} from "../../../types/TodoItem";
import TodoItemStateEnum from "../../../types/TodoItemStateEnum";
import {TodosService} from "../../../services/todos.service";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  stateEnum = TodoItemStateEnum;
  @Input({required: true}) todo!: TodoItem;

  constructor(private todosService: TodosService  ) {
  }


  protected readonly TodoItemStateEnum = TodoItemStateEnum;

  up() {
    this.todosService.handleUpEvent(this.todo.id)
  }



  down() {
    this.todosService.handleDownEvent(this.todo.id)
  }
}
