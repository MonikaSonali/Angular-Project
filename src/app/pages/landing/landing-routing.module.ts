import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{LandingscreenComponent} from './landingscreen/landingscreen.component'
const routes: Routes = [
  
  {
    path: '',
    component:LandingscreenComponent,
    children:[
      {
        path:'',
        component:LandingscreenComponent
      },
      {
        path:'',
        redirectTo:'',
        pathMatch:'full'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
