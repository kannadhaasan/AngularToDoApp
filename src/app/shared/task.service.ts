import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  formData: Task;
  taskList: Array<Task>;
  
  readonly URI= "http://localhost:8080/tasks"
  
  constructor(private http: HttpClient) { }

  postTask(formData: Task): Observable<any>{
    return this.http.post(this.URI, formData, {
    });
  }

  putTask(formData: Task): Observable<any>{
    return this.http.put(this.URI+'/'+formData.id, formData);
  }

  getAllTask()  {
    this.http.get(this.URI)
    .subscribe(Response=> {
      this.taskList = Response as Task[]
      this.formData.id= this.taskList.length+1;
      
    })
  }

  deleteTask(id: number){
    return this.http.delete(this.URI+'/'+id)
  }
  
  }

  
  



