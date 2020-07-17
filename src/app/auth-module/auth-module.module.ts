import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    DashboardCardComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule

  ]
})
export class AuthModuleModule { }
