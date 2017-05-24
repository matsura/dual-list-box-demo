import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = [];

  constructor() {

    for (let i = 1; i < 100; i++) {
      this.items.push({
        id: i.toString(),
        name: 'Name ' + i
      });
    }
  }

  log(data) {
    console.log(data);
  }
}
