import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = [{ id: '1', name: '2' }, { id: '3', name: '4' }, { id: '5', name: '6' }];

  constructor() {
    this.items = [...this.items];
  }
}
