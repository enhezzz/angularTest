import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DocumentComponent } from './document/document.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: Object,
  //   @Inject(APP_ID) private appId: string) {
  //   const platform = isPlatformBrowser(platformId) ?
  //     'in the browser' : 'on the server';
  //   console.log(`Running ${platform} with appId=${appId}`);
  // }
 }
