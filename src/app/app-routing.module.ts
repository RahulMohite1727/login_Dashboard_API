import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [
  {
    path: '', component: LoginComponent

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./auth-module/auth-module.module').then(mode => mode.AuthModuleModule),
    canActivate: [AuthGuard]
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
