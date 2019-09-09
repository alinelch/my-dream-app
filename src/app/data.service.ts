import { Injectable } from '@angular/core';
//12.2
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //12.3
  //constructor() { }
  constructor(private http: HttpClient) { }

  //11.2
  firstClick4(){
    return console.log('clicked4');
  }

  //12.4
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}
