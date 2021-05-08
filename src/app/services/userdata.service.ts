import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private URL = 'http://localhost:3000'
  constructor(private router:Router,private http:HttpClient) { 

  }
  getUserData(token){

    return this.http.get<any>(this.URL+'/profile',token)
  
  
  }
}

