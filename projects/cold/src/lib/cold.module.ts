import { NgModule } from '@angular/core';
import { ColdComponent } from './cold.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ColdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ColdComponent
  ]
})
export class ColdModule { }
