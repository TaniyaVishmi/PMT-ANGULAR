import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:5268/api/User/"

  constructor(private http: HttpClient) { }

  Register(userObj:any){

    return this.http.post<any>(`${this.baseUrl}Register`, userObj)

  }

  Login(loginObj:any){

    
    return this.http.post<any>(`${this.baseUrl}Login`, loginObj)

  }
}
