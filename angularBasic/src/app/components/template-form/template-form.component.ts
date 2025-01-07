import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  formdata = {
    //variable
    fname:'',
    email: '',
    password: '',
    invalid: '',
  };
  isSubmitted = false;
  onSubmit() {
    console.log('form submited');
    console.log('email:- ', this.formdata.email);
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }
}
