import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-changepasswordok',
  templateUrl: './changepasswordok.component.html',
  styleUrls: ['./changepasswordok.component.css']
})
export class ChangepasswordokComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/signin']);
      this.authService.logOut();
  }, 5000); 
  }
  }
  


