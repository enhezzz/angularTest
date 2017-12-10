import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NamedComponent} from "./named/named.component";
import {CanActivateGuard} from "./can-activate.guard";

const routes: Routes = [
  {
    path: 'sub',
    loadChildren: 'app/subModule/sub-module/sub-module.module#SubModuleModule',
    canActivate:[CanActivateGuard]
  },
  {
    path: 'a',
    component: NamedComponent,
    outlet:'named'
  },
  {
    path:'login',
    loadChildren: 'app/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
