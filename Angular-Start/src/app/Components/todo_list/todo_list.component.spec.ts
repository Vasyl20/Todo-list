/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Todo_listComponent } from './todo_list.component';

describe('Todo_listComponent', () => {
  let component: Todo_listComponent;
  let fixture: ComponentFixture<Todo_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todo_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
