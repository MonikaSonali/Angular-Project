import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';



@NgModule({
  declarations: [MenuComponent ,PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
