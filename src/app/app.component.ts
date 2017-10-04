import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  theme: string;

  onChangeTheme(currentTheme: number) {
    switch (currentTheme) {
      case 1:
        this.theme = 'light-lilac-theme';
        break;
      case 2:
        this.theme = 'light-blue-theme';
        break;
      case 3:
        this.theme = 'dark-purple-theme';
        break;
      case 4:
        this.theme = 'dark-pink-theme';
        break;
    }
  }
}
