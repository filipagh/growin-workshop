import {Routes} from '@angular/router';
import {TodoListComponent} from "../pages/todo-list/todo-list.component";
import {LoginComponent} from "../pages/login/login.component";
import {loginGuard} from "./guards/login.guard";

export const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
