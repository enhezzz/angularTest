import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdDirective } from './directive/ad-directive.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';


@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AppModule { }
