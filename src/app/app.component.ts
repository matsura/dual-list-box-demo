import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = [];
  selected = [];

  constructor() {

    this.items = [ { id: "1", name: "Antonito" }, { id: "2", name: "Bonito" } ];
    this.selected = ["1", "2"];
  }

  log(data) {
    console.log(data);
  }
}
