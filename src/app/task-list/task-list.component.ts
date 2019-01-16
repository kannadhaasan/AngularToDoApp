import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;
  constructor(private svc: TaskService, private http: HttpClient) { }

  ngOnInit() {

    this.tasks = new Array<Task>();
    this.getTask(); 
    this.svc.getAllTask();
  }

  getTask(){
    this.svc.getAllTask()
  }
  
  populateForm(tskForm: Task){
    this.svc.formData = Object.assign({}, tskForm);
  }

  onDelete(id: number){
    if (confirm('Are you sure to delete this record?')) {
    this.svc.deleteTask(id).subscribe(res => {
        this.getTask();
      }
    )
  }

  }

}
