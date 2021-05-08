import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-userexists',
  templateUrl: './userexists.component.html',
  styleUrls: ['./userexists.component.css']
})
export class UserexistsComponent implements OnInit {

  constructor(authService:AuthService,private router:Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.router.navigate(['/signup']);
  }, 5000); 
  }

}
