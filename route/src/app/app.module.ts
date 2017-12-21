import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubModuleModule} from "./subModule/sub-module/sub-module.module";
import {SubComponent1Component} from "./subModule/sub-component1/sub-component1.component";
import { NamedComponent } from './named/named.component';
import {CanActivateGuard} from "./can-activate.guard";
import {LoginServiceService} from "./login-service.service";
import {CanloadGuard} from "./auth/canload.guard";


@NgModule({
  declarations: [
    AppComponent,
    NamedComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [CanActivateGuard,LoginServiceService,CanloadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
