import { Component, OnInit } from '@angular/core';
import{ Router }from '@angular/router';
@Component({
  selector: 'app-changepasswordfail',
  templateUrl: './changepasswordfail.component.html',
  styleUrls: ['./changepasswordfail.component.css']
})
export class ChangepasswordfailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/private/profile/changepassword']);
  }, 5000); 
  }
  }


