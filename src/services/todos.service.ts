import {Injectable} from '@angular/core';
import {TodoItem} from "../types/TodoItem";
import TodoItemStateEnum from "../types/TodoItemStateEnum";
import {TodoItemNew} from "../types/TodoItemNew";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todoItems = new BehaviorSubject<TodoItem[]>([
    new TodoItem(1, "Todo", "Description 1", TodoItemStateEnum.CREATED),
    new TodoItem(2, "Todo ine ", "Descriptid;wifeiojreigj", TodoItemStateEnum.CREATED)
  ]);

  constructor() {
  }


  public handleUpEvent(id: number) {

    var actualIndex = this.todoItems.value.findIndex((todoItem) => todoItem.id === id);
    if (actualIndex > 0) {
      var todoItem = this.todoItems.value[actualIndex];
      this.todoItems.value[actualIndex] = this.todoItems.value[actualIndex - 1];
      this.todoItems.value[actualIndex - 1] = todoItem;
    }

  }

  public handleDownEvent(id: number) {
    var actualIndex = this.todoItems.value.findIndex((todoItem) => todoItem.id === id);
    if (actualIndex < this.todoItems.value.length - 1) {
      var todoItem = this.todoItems.value[actualIndex];
      this.todoItems.value[actualIndex] = this.todoItems.value[actualIndex + 1];
      this.todoItems.value[actualIndex + 1] = todoItem;
    }
  }

  public addNewTodo(event: TodoItemNew) {
    let todoItem = new TodoItem(this.todoItems.value.length + 1, event.name, event.description, TodoItemStateEnum.CREATED);
    this.todoItems.next(this.todoItems.value.concat([todoItem]))
  }

  public setInProgress(id: number) {
    var actualIndex = this.todoItems.value.findIndex((todoItem) => todoItem.id === id);
    this.todoItems.value[actualIndex].state = TodoItemStateEnum.IN_PROGRESS;
  }

  public setDone(id: number) {
    var actualIndex = this.todoItems.value.findIndex((todoItem) => todoItem.id === id);
    this.todoItems.value[actualIndex].state = TodoItemStateEnum.DONE;
  }
}
