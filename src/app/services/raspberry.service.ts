import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class RaspberryService {
  private URL = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  addRaspy(raspi){
    return this.http.post<any>(this.URL+'/addraspy',raspi);
  }
  listRaspis(){
    return this.http.get<any>(this.URL+'/myraspis');
  }
}
