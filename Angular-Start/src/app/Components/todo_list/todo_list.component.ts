import { asNativeElements, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'todo_list',
  templateUrl: './todo_list.component.html',
  styleUrls: ['./todo_list.component.css']
})
export class Todo_listComponent implements OnInit {

  constructor(private elementRaf:ElementRef) { }

  add_a_group() {
     var add_a_group = document.getElementById("dir-todo_list-id");
    //  document.getElementById("dir-todo_list")?.append("<div class='group'></div>");


    console.log("2");
  }


  ngOnInit() {



  }

}
