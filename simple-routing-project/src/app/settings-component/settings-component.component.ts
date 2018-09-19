import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.css']
})
export class SettingsComponentComponent implements OnInit {

  routePages=[
    {url:'profile',linkName:'Profile Info'},
    {url:'contact',linkName:'Contact Info'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
