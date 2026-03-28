import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiCaluclatorComponent } from './bmi-caluclator/bmi-caluclator.component';
import { CurcilComponent } from './curcil/curcil.component';
import { RectangelComponent } from './rectangel/rectangel.component';
import { EmployeeComponent } from './employee/employee.component';

import { VehicleComponent } from './vehicle/vehicle.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { YPipe } from './y.pipe';
import { RolePipe } from './role.pipe';
import { HighlightDirective } from './highlight.directive';
import { CapitalDirective } from './capital.directive';
import { WeatherComponent } from './weather/weather.component';
import { NuakriComponent } from './nuakri/nuakri.component';
import { ContactCeoComponent } from './contact/contact-ceo/contact-ceo.component';
import { ContactModule } from './contact/contact.module';
import { MovieModule } from './movie/movie.module';
import { Vechicle2Component } from './vechicle2/vechicle2.component';
import { SchoolIdModule } from './school-id/school-id.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { TokenInterceptor } from './token.interceptor';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { CommunicationComponent } from './communication/communication.component';
import { ClaclatorComponent } from './claclator/claclator.component';
import { SummaryComponent } from './summary/summary.component';
import { ActComponent } from './act/act.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CaluclatorComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    BmiCaluclatorComponent,
    CurcilComponent,
    RectangelComponent,
    EmployeeComponent,
    VehicleComponent,
    AccountComponent,
    FlipcartComponent,
    MailComponent,
    YPipe,
    RolePipe,
    HighlightDirective,
    CapitalDirective,
    WeatherComponent,
    NuakriComponent,
    Vechicle2Component,
    CreateUserComponent,
    CreateVehicleComponent,
    CreateStudentComponent,
    ViewVehicleComponent,
    ViewAccountComponent,
    CreateAccountComponent,
    ViewStudentComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    ItemsComponent,
    NavComponent,
    CartComponent,
    CommunicationComponent,
    ClaclatorComponent,
    SummaryComponent,
    ActComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    ReactiveFormsModule,
    

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
