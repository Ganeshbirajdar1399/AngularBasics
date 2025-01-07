import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private readonly apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
 
  getUsersData(schema:string):Observable<any>{
return this.http.get(`${this.apiUrl}/${schema}`)
  }
}
