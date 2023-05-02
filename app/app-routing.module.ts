
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { AuthguardGuard } from './authguard.guard';
import { AdminComponent } from './admin/admin.component';
import { UserdataComponent } from './userdata/userdata.component';
import { AdminguardGuard } from './adminguard.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
 },
  {
    path:'index',
    component:IndexComponent,
    canActivate:[AuthguardGuard]
  }
  ,{
    path:'admin',
    component:AdminComponent
  },
  {
    path:'userdata',
    component:UserdataComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
