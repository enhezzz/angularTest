import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {NamedComponent} from "./named/named.component";
import {CanActivateGuard} from "./can-activate.guard";
import {CanloadGuard} from "./auth/canload.guard";
import {preLoad} from "./preload/preLoad";

const routes: Routes = [
  {
    path: 'sub',
    loadChildren: 'app/subModule/sub-module/sub-module.module#SubModuleModule',
    canActivate:[CanActivateGuard],
    // canLoad:[CanloadGuard]
  },
  {
    path: 'a',
    component: NamedComponent,
    outlet:'named'
  },
  {
    path:'login',
    loadChildren: 'app/login/login.module#LoginModule',
    data:{preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true ,
      preloadingStrategy: preLoad//PreloadAllModules
    } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
