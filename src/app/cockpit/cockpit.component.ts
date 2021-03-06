import { Component,EventEmitter, Output, ViewChild ,ContentChild, ElementRef} from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: [ './cockpit.component.css' ]
})
export class CockpitComponent implements ContentChild  {
  name = 'Angular';
  @Output('bpcreated') btnClick = new EventEmitter<{name:string, type:string}>();

  @ViewChild('localref2') inputData2 : ElementRef;
  @ContentChild('contRef') paradata: ElementRef;
  
  constructor(private router:Router){

  }
  xyz(localRef:HTMLInputElement){
      this.router.navigate(['/']);
  //    console.log("in xyz1" + this.inputData2.nativeElement.value);

  //   console.log("in xyz2" + localRef);
  //   this.btnClick.emit({name:'testfun', type:'eventclck'});

  //   console.log("in xyz3" + this.paradata.nativeElement.value);
  //  // this.router.navigate('/server');
  }

}
