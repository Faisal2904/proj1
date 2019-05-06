import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { UsersComponent } from './cockpit/users/users.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes:Routes=[
  {path:'' , component:HelloComponent},
  {path:'server' , component:ServerElementComponent},
  {path:'cockpit' , component:CockpitComponent},
  {path:'users/:id/:name', component:UsersComponent},
  {path:'page-not-found', component:ErrorPageComponent},
  {path:'**', redirectTo:'/page-not-found'}
  
  ]
@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutesModule{

}