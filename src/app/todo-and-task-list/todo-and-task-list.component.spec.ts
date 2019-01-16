import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAndTaskListComponent } from './todo-and-task-list.component';

describe('TodoAndTaskListComponent', () => {
  let component: TodoAndTaskListComponent;
  let fixture: ComponentFixture<TodoAndTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAndTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAndTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
