import { asNativeElements, Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo_list',
  templateUrl: './todo_list.component.html',
  styleUrls: ['./todo_list.component.css']
})
export class Todo_listComponent implements OnInit {

  constructor() { }



  ngOnInit() {

    function add_a_group() {
      var add_a_group = document.getElementById("dir-todo_list-id");
       document.getElementById("dir-todo_list")?.append("<div class='group'></div>")

      console.log("2");
    }


  }

}
