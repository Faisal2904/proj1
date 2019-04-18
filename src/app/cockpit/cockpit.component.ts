import { Component,EventEmitter, Output, ViewChild ,ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: [ './cockpit.component.css' ]
})
export class CockpitComponent  {
  name = 'Angular';
  @Output('bpcreated') btnClick = new EventEmitter<{name:string, type:string}>();

  @ViewChild('localref2') inputData2 : ElementRef;
  @ContentChild('contRef') paradata;
  constructor(){

  }
  xyz(localRef:HTMLInputElement){
     console.log("in xyz" + this.inputData2.nativeElement.value);

    console.log("in xyz" + localRef);
    this.btnClick.emit({name:'testfun', type:'eventclck'});

    console.log("in xyz" + this.paradata.value);
  }

}
