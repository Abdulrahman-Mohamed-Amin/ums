import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users')
  }

  login(obj: any) :Observable<any> {
    return this.http.post("https://dummyjson.com/auth/login" , obj)
  }
}
