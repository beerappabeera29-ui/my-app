import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducComponent } from './produc/produc.component';

const routes: Routes = [
  {path:'produc',component:ProducComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrdRoutingModule { }
