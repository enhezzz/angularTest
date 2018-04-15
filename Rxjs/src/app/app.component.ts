import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'Rxjs';
import { map, catchError } from 'Rxjs/operators';
import { of } from 'Rxjs/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // function fromEvent(target, eventName) {
    //   return new Observable((observer) => {
    //     const handler = (e) => observer.next(e);

    //     // Add the event handler to the target
    //     target.addEventListener(eventName, handler);

    //     return () => {
    //       // Detach the event handler from the target
    //       target.removeEventListener(eventName, handler);
    //     };
    //   });
    // }
    // const nameInput = document.getElementById('name') as HTMLInputElement;

    // const subscription = fromEvent(nameInput, 'keydown')
    //   .subscribe((e: KeyboardEvent) => {
    //     console.log(e.key);
    //     // nameInput.value = '';

    //   });




  }
}
