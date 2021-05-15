import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  private URL = 'http://localhost:3000'
  constructor(private http:HttpClient,router:Router) { }

  changePassword(pass){
    return this.http.post<any>(this.URL+'/profile/modifypassword',pass);
  }
}
