import { Todo } from './models/todo-model';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'citromPotlo';

  todos: Todo[] = [];

  constructor(private httpService: HttpService) {
    this.httpService.getAllTodos().subscribe((todoData)=> {
      this.todos = todoData as Todo[];
      console.log(this.todos);
      
    })
   
   }

  ngOnInit(): void {
  }
}
