import { Component, OnInit } from '@angular/core';
import { ButtonGroup } from 'src/app/interfaces/button-group';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-configraspy',
  templateUrl: './configraspy.component.html',
  styleUrls: ['./configraspy.component.css']
})
export class ConfigraspyComponent implements OnInit{


    

  constructor(private authService:AuthService, router:Router) { }

  ngOnInit(): void {
  }
  submitRed(){
    this.authService.setRed()
  }
  submitGreen(){
    this.authService.setGreen()
  }
  submitBlue(){
  this.authService.setBlue()
}
}
