import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsuccessComponent } from './components/loginsuccess/loginsuccess.component';
import { SignupsuccessComponent } from './components/signupsuccess/signupsuccess.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'login-success', component: LoginsuccessComponent },
  { path: 'signup-success', component: SignupsuccessComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
