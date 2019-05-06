import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { UsersComponent } from './cockpit/users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import{AppRoutesModule}from './app-routes.module'




@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutesModule ],
  declarations: [ AppComponent, HelloComponent,CockpitComponent, ServerElementComponent,UsersComponent,ErrorPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
