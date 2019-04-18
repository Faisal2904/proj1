import { Component,Input, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [ './server-element.component.css' ]
})
export class ServerElementComponent implements OnInit {
  name = 'Angular';
  @Input('srvElement') element:{type:string, name:string, staus: string};
constructor(){
   console.log("constructor called");
 } 
 ngOnChanges(changes:SimpleChanges){
 console.log("ngOnChange called");
 console.log(changes);
 }
  

  ngOnInit(){
   console.log("ngOnInit called");
}




}
