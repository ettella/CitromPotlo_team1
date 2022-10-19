import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ngPrimeModule } from '../ngPrime/ngPrime.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ngPrimeModule],
  exports: [
    ReactiveFormsModule,
    ngPrimeModule,
    CustomButtonComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
  ],
})
export class SharedModule {}
