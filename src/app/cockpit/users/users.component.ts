import { Component,OnDestroy} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import {Subscription}from 'rxjx/Subscription'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})

export class UsersComponent implements OnDestroy{

  user: {id: number, name: string};
  subs:Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };

    this.subs=this.route.params.subscribe(  //this is to dynamically change the data
      (param:Params)=>{
        this.user.id=param['id'];
        this.user.name=param['name']
      }
    )
  }


  ngOnDestroy(){
      this.subs.unsubscribe();
  }


}