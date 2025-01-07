import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  name = 'anand';
  showValue = true;

  players: string[] = ['Dhoni', 'Rohit', 'Virat', 'Sachin'];
  students = [
    { Name: 'Anand', Role: 'Developer' },
    { Name: 'Adarsh', Role: 'MEAN Stack' },
    { Name: 'Swati', Role: 'MERN Developer' },
    { Name: 'Mahesh', Role: 'React Stack' },
  ];

  playerName = 'Dhoni';

  //ngClass
  myClass = {
    p: this.showValue,
    style: this.showValue,
  };
  disableClass = {
    das: this.showValue,
  };
  //end ngClass

  //ngStyle
  myActivestyle = {
    // color: this.showValue ? 'red' : 'yellow'
    color: 'red',
    'background-color': 'black',
    padding: '5px',
    margin: '5px 5px',
  };

  // getStyles() {
  //   return {
  //     'color': this.showValue ? 'white' : 'black', // Toggle between white and black text color
  //     'background-color': this.showValue ? 'black' : 'yellow' // Toggle between black and yellow background
  //   };
  // }
  myDisablestyle = {
    color: 'yellow',
    'background-color': 'blue',
    padding: '5px',
    margin: '5px 5px',
  };
  ngSwitch: any;
  //end ngStyle

  changeColor() {
    this.showValue = !this.showValue;
  }

  showName() {
    console.log(this.playerName);
  }
}
