import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primenumber',
  imports: [FormsModule],
  templateUrl: './primenumber.component.html',
  styleUrl: './primenumber.component.css'
})
export class PrimenumberComponent {
  number: number = 0; // Two-way bound input
  result: string = ''; // Result message

  checkPrime() {
    if (this.number <= 1) {
      this.result = 'Number is not prime';
      return;
    }

    for (let i = 2; i < this.number; i++) {
      if (this.number % i === 0) {
        this.result = 'Number is not prime';
        return;
      }
    }

    this.result = 'Number is prime';
  }
}
