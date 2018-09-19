import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Route[] = [
  {component:SettingsComponentComponent,path:'settings',
   children:[
     {component:ProfileComponentComponent,path:'profile'},
     {component:ContactComponentComponent,path:'contact'}
   ]
  },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {component:HomeComponentComponent,path:'home'},
  {component:ErrorComponent,path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
