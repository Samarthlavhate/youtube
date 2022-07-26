import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Form1Component } from './form1/form1.component';
import { From2Component } from './from2/from2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },{
    path:"form2",
    canActivate: [AuthGuard],
    component:From2Component
  }
  ,{
    path:"form1",
    component:Form1Component
  },{
    path:"login",
    component:LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
