import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../services/services/local-storage.service';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from '../../services/services/session-storage.service';
import { LoginServiceService } from '../../services/services/login-service.service';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  isSubmitted = false;

  USER_Key = 'user';
  MOBILE_KEY = 'mobileNo';

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private localService: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private loginService: LoginServiceService
  ) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      mobileno: ['', [Validators.pattern('[0-9]{10}')]],
    });
  }

  onLogin(){
    const user = {username: "anand kumar",password: "ssss",id: "as12"}
    this.loginService.setLogin(user);
    alert(`${user.username}, logged in successfully`);
    this.router.navigate(['/pagination']);
  }

  OnSubmit() {
    if (this.myForm.valid) {
      this.authService.isLoggedIn();
      console.log(this.myForm.value, 'value of reactive form ');
      this.isSubmitted = true;
    } else {
      console.log(this.myForm, 'error from forms ');
    }
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }
  saveData() {
    this.localService.setItem(this.USER_Key, { fname: 'xyz', id: 1001 });
    this.sessionStorage.setItem(this.MOBILE_KEY, { mobileNo: 9900887766 });
    console.log('loacal storage data save');
    console.log('session storage data save');
  }
  getData() {
    const userData = this.localService.getItem(this.USER_Key);
    const userSessionData = this.sessionStorage.getItem(this.MOBILE_KEY);
    console.log('loacal storage data: ', userData);
    console.log('session storage data: ', userSessionData);
  }
  clearData() {
    this.localService.clearData(this.USER_Key);
    this.sessionStorage.clearData(this.MOBILE_KEY);
    console.log('loacal storage data clear single');
  }

  clearAllData() {
    this.localService.clearAll();
    this.sessionStorage.clearAll();
    console.log('loacal storage clear all data');
  }


  user = {fname:'anand',role:'developer'}
  id = 12;
  navToForm(){
    // this.router.navigate(['/form',12]);
    this.router.navigate(['/form',this.id], {
      queryParams: this.user
    });
  }
}
