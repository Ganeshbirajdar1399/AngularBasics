import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private route:ActivatedRoute){} //dependency injection
  showValue() {
  this.route.params.subscribe((p)=>{
    console.log(p['id'])
  })
  this.route.queryParamMap.subscribe((element)=>{
  console.log('fname from query: '+ element.get('fname'));
  console.log('role from query: '+ element.get('role'))
  })
  }
}
