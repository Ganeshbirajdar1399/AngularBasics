import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor() { }
loggedInUser : any

  setLogin(userData: any){
this.loggedInUser = userData;
  }

  getLogin(){
    return this.loggedInUser;
  }
}
