import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { DateComponentComponent } from './date-component/date-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { ViewModuleModule } from './view-module/view-module.module';
import { SimpleServiceService } from 'src/app/simple-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    DateComponentComponent,
    EmployeeComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModuleModule,
    HttpClientModule
  ],
  providers: [SimpleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
