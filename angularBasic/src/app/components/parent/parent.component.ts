import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
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
