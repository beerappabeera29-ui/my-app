import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolIdRoutingModule } from './school-id-routing.module';
import { SchoolComponent } from './school/school.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchoolComponent
  ],
  imports: [
    CommonModule,
    SchoolIdRoutingModule,
    FormsModule
  ]
})
export class SchoolIdModule { }
