import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoAndTaskListComponent } from './todo-and-task-list/todo-and-task-list.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent},
  { path: 'home', component: TodoAndTaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

