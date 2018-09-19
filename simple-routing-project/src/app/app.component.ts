import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-routing-project';
  homeString='home';
  settingsString='settings';
  routes=[
    {linkName:'Home',url:'home'},
    {linkName:'Settings Page',url:'settings'}
  ];
}
