import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-userok',
  templateUrl: './userok.component.html',
  styleUrls: ['./userok.component.css']
})
export class UserokComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/signin']);
  }, 5000); 
  }
  }


