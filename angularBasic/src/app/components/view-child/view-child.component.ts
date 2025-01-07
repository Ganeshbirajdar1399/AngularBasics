import { Component, ElementRef, ViewChild } from '@angular/core';
import { PipeComponent } from '../pipe/pipe.component';

@Component({
  selector: 'app-view-child',
  imports: [PipeComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('changetext') hellodiv !: ElementRef
  @ViewChild('pipeComp') pipeComp !: PipeComponent

  changeText(){
    this.hellodiv.nativeElement.innerText = 'text changed';
    this.hellodiv.nativeElement.style.color = 'red';
    this.hellodiv.nativeElement.style.fontStyle = 'italic';
  }  
  callPipeFunc(){
    this.pipeComp.greetingFunction()
  }
}
