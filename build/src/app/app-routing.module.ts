import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'document',
    component: DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
