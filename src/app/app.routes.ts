import {Routes} from '@angular/router';
import {TodoListComponent} from "../pages/todo-list/todo-list.component";
import {LoginComponent} from "../pages/login/login.component";

export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
