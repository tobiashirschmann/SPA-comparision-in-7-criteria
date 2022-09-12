import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeAnimation } from './animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})




export class AppComponent {
  title = 'm4_routingAndNavigation-app';
  count: number = 0;

  constructor(private store: Store<{count: number}>) {
    this.store.select("count").subscribe((data) => {
      this.count = data
    })
   }
}


