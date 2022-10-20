import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
FormControl

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });}


    get username(): FormControl {
      return this.form.get('username') as FormControl;
    }

    get password(): FormControl {
      return this.form.get('password') as FormControl;
    }

    onSubmit(){

    }


  ngOnInit(): void {
  }
  }
