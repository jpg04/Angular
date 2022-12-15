import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookSignUpComponent } from './facebook-sign-up/facebook-sign-up.component';

const routes: Routes = [
  {
    path:'', 'pathMatch':'full', redirectTo:'sign-up'
  },
  {
    path:'facebook-sign-up', component:FacebookSignUpComponent
  },
  // {
  //   path:'login', component:LoginComponent
  // },
  // {
  //   path:'forgot-password', component:ForgotPasswordComponent
  // },
  // {
  //   path:'**',component:PageNotFoundComponent
  // }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
