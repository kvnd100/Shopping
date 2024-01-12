import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping';
  navigation: string = 'recipe';

  onNavigate(event: string) {
    this.navigation = event;
  }
}
