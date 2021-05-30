import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-deleteraspiok',
  templateUrl: './deleteraspiok.component.html',
  styleUrls: ['./deleteraspiok.component.css']
})
export class DeleteraspiokComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/private']);
      
  }, 5000); 
  }

}
