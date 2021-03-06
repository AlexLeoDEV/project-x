import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  theme: string;

  onChangeTheme(currentTheme: string) {
    this.theme = currentTheme;
  }
}
