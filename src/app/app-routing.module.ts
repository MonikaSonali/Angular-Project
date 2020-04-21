import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateService } from './guards/can-activate.service'

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [CanActivateService],
    loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule)
    // loadChildren: "src/app/pages/pages.module#PagesModule"
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
