import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  newID: number;

  constructor(private svc: TaskService, private http: HttpClient ) { }

  ngOnInit() {
    this.resetForm();
    this.svc.getAllTask();

  }
  
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();

    this.svc.formData = {
      id: 0,
      taskName: '',
      taskDescription: '',
      taskCreatedDate: '',
      taskUpdateDate: '',
      taskStatus: ''

    }
  }

  onSubmit(form: NgForm){
    if(form.value.id > 0)
this.insertRecord(form);
else
this.updateRecord(form);


  }
  insertRecord(form: NgForm){
    this.svc.postTask(form.value).subscribe(res => {
      this.resetForm(form);
      this.svc.getAllTask();
    })

  }

  reload(){
    window.location.reload;
  }
 
updateRecord(form: NgForm){
  this.svc.putTask(form.value).subscribe(res => {
    this.resetForm(form)
    this.svc.getAllTask();
  })
}


}
