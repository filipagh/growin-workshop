import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItem} from "../../types/TodoItem";
import TodoItemStateEnum from "../../types/TodoItemStateEnum";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItemInputComponent} from "./todo-item-input/todo-item-input.component";
import {TodoItemNew} from "../../types/TodoItemNew";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoItemInputComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(private todosService: TodosService ) {
    todosService.todoItems.subscribe((todoItems) => {
      this.todoItems = todoItems;
    })
  }

  public todoItems!: TodoItem[]

  public handleUpEvent(id: number) {
    var actualIndex = this.todoItems.findIndex((todoItem) => todoItem.id === id);
    if (actualIndex > 0) {
      var todoItem = this.todoItems[actualIndex];
      this.todoItems[actualIndex] = this.todoItems[actualIndex - 1];
      this.todoItems[actualIndex - 1] = todoItem;
    }

  }

  public handleDownEvent(id: number) {
    var actualIndex = this.todoItems.findIndex((todoItem) => todoItem.id === id);
    if (actualIndex < this.todoItems.length - 1) {
      var todoItem = this.todoItems[actualIndex];
      this.todoItems[actualIndex] = this.todoItems[actualIndex + 1];
      this.todoItems[actualIndex + 1] = todoItem;
    }
  }

  public addNewTodo($event: TodoItemNew) {
    console.log($event);
    this.todoItems.push(new TodoItem(this.todoItems.length + 1, $event.name, $event.description, TodoItemStateEnum.CREATED));

  }
}
