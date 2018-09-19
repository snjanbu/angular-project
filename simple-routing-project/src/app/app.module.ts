import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SettingsComponentComponent,
    ErrorComponent,
    ProfileComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
