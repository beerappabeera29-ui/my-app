import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrdRoutingModule } from './prd-routing.module';
import { ProducComponent } from './produc/produc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProducComponent
  ],
  imports: [
    CommonModule,
    PrdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PrdModule { }
