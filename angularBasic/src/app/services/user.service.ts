import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) {}
  
  private data = [
    { id:1, name:'Arun', role:'MEAN developer'},
    { id:2, name:'Varun', role:'MERN developer'},
    { id:3, name:'Sarun', role:'Native developer'},
  ]

  getStaticData(){
    return this.data
  }

  getPostData(): Observable<any>{
return this.http.get('http://localhost:3000/posts')
  }
  getCustomerData(): Observable<any>{
    return this.http.get('http://localhost:3000/customers')
      }
}
