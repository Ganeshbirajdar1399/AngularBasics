import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquarePipe } from "../../pipes/square.pipe";

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, SquarePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName = 'Anand';
  // currency = 3000
  date = new Date();

  greetingFunction(){
    console.log("greeting from pipes");
  }
}
