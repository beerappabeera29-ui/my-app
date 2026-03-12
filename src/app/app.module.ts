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
import { FormsModule } from '@angular/forms';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiCaluclatorComponent } from './bmi-caluclator/bmi-caluclator.component';
import { CurcilComponent } from './curcil/curcil.component';
import { RectangelComponent } from './rectangel/rectangel.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule}from '@angular/common/http';
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
    ProductsComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
