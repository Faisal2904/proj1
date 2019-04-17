import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  serverElement={type:'server',name:'test', status:'on'};
  name = 'Angular';

  constructor(){
   console.log(this.serverElement);
 } 
}
