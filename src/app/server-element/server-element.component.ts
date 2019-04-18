import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [ './server-element.component.css' ]
})
export class ServerElementComponent implements OnInit {
  name = 'Angular';
  @Input('srvElement') element:{type:string, name:string, staus: string};

  constructor(){
   //console.log(this.element);
 } 

  ngOnInit(){
   console.log(this.element);
}
}
