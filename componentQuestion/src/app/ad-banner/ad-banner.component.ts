import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../directive/ad-directive.directive';
import { AdComponent } from '../ad.component';

import { HeroJobAdComponent } from '../hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements AfterViewInit, OnDestroy,OnInit {
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }
  ads = [HeroJobAdComponent,HeroProfileComponent];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
  
    // console.log(typeof this.adHost.viewContainerRef)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem);//得到组件实例

    let viewContainerRef = this.adHost.viewContainerRef;//得到ng-template引用
    viewContainerRef.clear();//销毁ng-template

    let componentRef = viewContainerRef.createComponent(componentFactory); //在元素以前的位置创建一个组件
    (<AdComponent>componentRef.instance).data = {headline: 1,body:2,name:3,bio:4};//填充组件实例属性或行为
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}