import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() name: string = '';
  @Input() type: string = 'button';



  constructor() { }

  ngOnInit(): void {
  }

}