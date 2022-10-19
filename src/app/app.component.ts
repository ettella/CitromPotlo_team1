import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'citromPotlo';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getAllTodos().subscribe();
  }
}
