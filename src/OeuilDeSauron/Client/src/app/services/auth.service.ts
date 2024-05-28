// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/current-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://localhost:5001/api/';
  user: CurrentUser;
  returnUrl: string;

  constructor(private http: HttpClient) {


    this.returnUrl = 'localhost:5001';
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(this.authUrl + 'user');
  }

  getAuthenticated(): Observable<any> {
    return this.http.get<any>(this.authUrl + '?returnUrl=' + this.returnUrl);
  }

  logout():Observable<any> {
    return this.http.post<any>(this.authUrl+'authentication/logout','');
  }

  getUserDetailsById(id : number):Observable<any>{
    return this.http.get<any>(this.authUrl+'users/'+id); 
  }
  getUserProfile():Observable<any>{
    return this.http.get<any>(this.authUrl+'user/profile'); 
  }

}
