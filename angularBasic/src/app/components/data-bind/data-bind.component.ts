import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-data-bind',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-bind.component.html',
  styleUrl: './data-bind.component.css'
})
export class DataBindComponent {
  link = 'https://google.com';

  disable = false;

  imgLink = 'https://www.gstatic.com/webp/gallery/1.jpg';

  fire = false;
  lake = false;
  tree = false;

  username: string = 'virat@kohli';
  playername: string = 'Virat Kohli';
  runs: number = 10000;
  innings: number = 204;
  myCol: any;

  name: string = 'Aman';

  avg() {
    let avarage: any;
    avarage = this.runs / this.innings;
    return avarage;
  }

  increase(): void {
    this.runs += 100;
    // alert("button is clicked")
  }
  decrease(): void {
    this.runs -= 100;
    // alert("button is clicked")
  }
  changeUrl() {
    this.link = 'https://cricbuzz.com';
  }
  imgChange(imageNumber: number) {
    if (imageNumber === 1) {
      this.fire = !this.fire; // fire
    } else if (imageNumber === 2) {
      this.lake = !this.lake; // fire
    } else if (imageNumber === 3) {
      this.tree = !this.tree; // fire
    }
  }
}
