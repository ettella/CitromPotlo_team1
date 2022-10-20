import { Todo } from './../models/todo-model';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly BASE_URL: string = "http://localhost:3000/todos";

  constructor(private http: HttpClient) { }

  public getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.BASE_URL);
    
  }

}
