import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { fromEventPattern, Observable } from 'rxjs';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router:Router){
    
  }
  canActivate():boolean{
    if (this.authService.loggedIn()){
      return true;

  }
  this.router.navigate(['/signin']);
}
  
}
