import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    { path: '', component: HomeComponent, },
    { path: 'countries', component: CountriesComponent, },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
