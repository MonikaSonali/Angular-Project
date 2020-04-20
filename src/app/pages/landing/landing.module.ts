import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingscreenComponent} from './landingscreen/landingscreen.component'
import {LandingRoutingModule} from './landing-routing.module'

@NgModule({
  declarations: [LandingscreenComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
