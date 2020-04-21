import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{PagesComponent} from './pages.component'

const routes: Routes = [
 {
   path:'',
   component:PagesComponent,
   children:[
     {
       path:'landing',
       loadChildren:()=>import('./landing/landing.module').then(x=>x.LandingModule)
     },
     {
       path:'',
       redirectTo:'landing',
       pathMatch:'full'
     },
     {
       path:'**',
       redirectTo:'landing'
     }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
