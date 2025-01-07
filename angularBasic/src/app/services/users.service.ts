import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

// apiUrl = 'https://jsonplaceholder.typicode.com/users/10';
apiUrl = 'https://dummyjson.com/quotes?limit=3&skip=10';
userUrl = 'http://localhost:3000/users';

constructor(private http: HttpClient) {}

fetchData(): Observable<any> {
  return this.http.get(this.apiUrl);
}

userFetchData(): Observable<any> {
  return this.http.get(this.userUrl);
}

insertData(users: any): Observable<any> {
  return this.http.post(this.userUrl, users);
}

DeletetData(id: any): Observable<any> {
  return this.http.delete(`${this.userUrl}/${id}`);
}

updateUser(user: any, id: string): Observable<any> {
  return this.http.put(`${this.userUrl}/${id}`, user);
}
}
