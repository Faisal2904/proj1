import { Component} from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})

export class UsersComponent{

  user: {id: number, name: string};

  constructor() { }

  ngOnInit() {
  }


}