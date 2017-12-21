import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {SubComponent1Component} from "../sub-component1/sub-component1.component";
import { SubComponent2Component } from './sub-component2/sub-component2.component';
import {CanActivateGuard} from "../../can-activate.guard";
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '1',
        // children: []
        component: SubComponent1Component,
        canDeactivate:[CanActivateGuard]
      },
      {
        path: '2',
        component: SubComponent2Component
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubComponent1Component, SubComponent2Component]
})
export class SubModuleModule { }
