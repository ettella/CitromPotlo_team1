import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly BASE_URL = 'http://localhost:3000/todos'
  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  public getAllTodos(){
    return this.http.get<Todo[]>(this.BASE_URL)
  }

}
