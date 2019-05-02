import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { UsersComponent } from './cockpit/users/users.component';
import{Routes,RouterModule} from '@angular/router';

const appRoutes:Routes=[
  {path:'' , component:HelloComponent},
  {path:'server' , component:ServerElementComponent},
  {path:'cockpit' , component:CockpitComponent},
  {path:'users/:id/:name', component:UsersComponent}
  
  ]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent,CockpitComponent, ServerElementComponent,UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
