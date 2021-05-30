import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-configureok',
  templateUrl: './configureok.component.html',
  styleUrls: ['./configureok.component.css']
})
export class ConfigureokComponent implements OnInit {
button = '${this.authService.getColor()}'
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/private']);
      
  }, 5000);

  }

}
