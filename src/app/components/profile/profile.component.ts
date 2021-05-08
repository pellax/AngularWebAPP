import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
token =''
username = ''
  constructor(private userdataService:UserdataService) { 
    this.token = localStorage.getItem('token')
    

  }

  ngOnInit(): void {
    this.userdataService.getUserData(this.token)
    .subscribe
  }

}
