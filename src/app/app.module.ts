import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';
import { CustomCheckboxComponent } from './shared/components/custom-checkbox/custom-checkbox.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { SharedModule } from './shared/shared.module';





import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomButtonComponent,
    CustomCheckboxComponent,
    HeaderComponent,
    TodoListComponent,
    TodoDetailsComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
