import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 //@Input => Parent to child
 @Input() firstName = '';
 @Input() arrayNumber: number[] = [];
 @Input() string = '';
 @Input() fromParent = '';

 //@output => child to parent
 @Output() sendToParent = new EventEmitter();

 sendDataToParent() {
   this.sendToParent.emit('Data from child');
 }

 username = 'Anand';
 arrNumber = [1, 2, 3, 4];
 value = '';
 value2 = '';
 stringValue = '';
 fromChild = '';

 sendtochild = '';

 sendValue() {
   this.value = this.stringValue;
 }
 sendToChild() {
   this.value2 = this.sendtochild;
 }
 receiveFromChild(text: string) {
   console.log(text, 'text form child');
   this.fromChild = text;
 }
}
