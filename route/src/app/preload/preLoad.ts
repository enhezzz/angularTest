import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class preLoad implements PreloadingStrategy {
  private preloadList: string[] = [];
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data&&route.data['preload']){
      this.preloadList.push(route.path);
      return fn();
    }

    else
    return Observable.of(null);
  }

}
