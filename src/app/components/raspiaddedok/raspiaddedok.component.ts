import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-raspiaddedok',
  templateUrl: './raspiaddedok.component.html',
  styleUrls: ['./raspiaddedok.component.css']
})
export class RaspiaddedokComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/private']);
      
  }, 5000); 
  }

}
