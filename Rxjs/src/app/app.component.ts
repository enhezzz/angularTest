import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'Rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const myObservable = Observable.of(1, 2, 3);
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    // Execute with the observer object
    myObservable.subscribe(myObserver);
  }

}
