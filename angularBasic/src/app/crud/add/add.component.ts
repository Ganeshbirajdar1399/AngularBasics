import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input() fname:string =''
  @Input() showValue:boolean =false
  
   ngOnChanges(changes: SimpleChanges): void {
    console.log('values',changes)
    if(changes?.['fname']){
      console.log(this.fname,'ngOnChanges in fname')
    }
  
    if(changes?.['showValue']){
      console.log(this.showValue,'ngOnChanges in showValue')
    }
     
   }
  
  
   ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('nginitView called')
   }
  
   ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy Called');
   }
}
