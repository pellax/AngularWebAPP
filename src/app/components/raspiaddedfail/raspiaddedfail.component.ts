import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-raspiaddedfail',
  templateUrl: './raspiaddedfail.component.html',
  styleUrls: ['./raspiaddedfail.component.css']
})
export class RaspiaddedfailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/private']);
      
  }, 5000); 
  }

}
