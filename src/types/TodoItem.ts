import TodoItemStateEnum from "./TodoItemStateEnum";

export class TodoItem{
  public id: number;
  public name: string;
  public description: string;
  public state: TodoItemStateEnum;

  constructor(id: number, name: string, description: string, state: TodoItemStateEnum) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.state = state;
  }
}
