import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddComponent } from "../add/add.component";

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, AddComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userName='Anil';
  showValue = false;
  

  toggle(){
this.showValue = !this.showValue
  }
}
