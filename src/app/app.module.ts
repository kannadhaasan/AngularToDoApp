import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './shared/task.service';
import { FormsModule }   from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import { TodoAndTaskListComponent } from './todo-and-task-list/todo-and-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    TaskListComponent,
    LoginComponent,
    TodoAndTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
