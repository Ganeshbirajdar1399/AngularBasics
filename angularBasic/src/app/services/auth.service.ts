import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private IsStatus = false;
  constructor() { }

  isLoggedIn(){
    this.IsStatus = true;

  };
  isLoggedOut(){
    this.IsStatus = false;
  }

  isStatusCheck():boolean{
    return this.IsStatus;
  }
}
