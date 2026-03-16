import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiCaluclatorComponent } from './bmi-caluclator/bmi-caluclator.component';
import { CurcilComponent } from './curcil/curcil.component';
import { RectangelComponent } from './rectangel/rectangel.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { NuakriComponent } from './nuakri/nuakri.component';
import { ContactCeoComponent } from './contact/contact-ceo/contact-ceo.component';
import { Vechicle2Component } from './vechicle2/vechicle2.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthGuard], component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'caluclator',component:CaluclatorComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'event-registration',component: EventRegistrationComponent},
    {path:'bmi-caluclator',component:BmiCaluclatorComponent},
    {path:'curcil',component:CurcilComponent},
    {path:'rectangel',component:RectangelComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'products',component:ProductsComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'mail',component:MailComponent},
    {path:'weather',component:WeatherComponent},
    {path:'nuakri',component:NuakriComponent},
    {path:'contact-ceo',component:ContactCeoComponent},
    {path:'vechicle2',component:Vechicle2Component},
    {path:'payment', loadChildren:()=>import('./payment/payment.module').then(m=>m.PaymentModule)},
    {path:'movie',loadChildren:()=>import('./movie/movie.module').then(m=>m.MovieModule)},
    {path:'school-id',loadChildren:()=>import('./school-id/school-id.module').then(m=>m.SchoolIdModule)},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-student',component:CreateStudentComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
