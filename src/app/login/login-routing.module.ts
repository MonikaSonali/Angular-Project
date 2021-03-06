import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component'

const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
    children:[
      {
        path:'',
        component:LoginComponent,
      },
      {
        path:'',
       redirectTo:'',
       pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
