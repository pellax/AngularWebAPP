import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from '../../services/auth.service';
@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {
  details: UserDetails;
  constructor(private auth:AuthService) { }

  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}