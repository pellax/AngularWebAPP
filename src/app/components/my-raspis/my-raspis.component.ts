import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import { RaspberryService } from 'src/app/services/raspberry.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-my-raspis',
  templateUrl: './my-raspis.component.html',
  styleUrls: ['./my-raspis.component.css']
})
export class MyRaspisComponent implements OnInit {
raspi=[];
state:boolean=false;
  constructor(private authservice: AuthService,
    private router: Router,private raspiService:RaspberryService) { }

  ngOnInit(): void {
    this.raspiService.listRaspis()
    .subscribe(
      res =>
      { 
        this.raspi= res
        
      },
     err => {
     console.log(err) 
     this.state = true;
    }
    )

  }
 getState(){
   return state;
 }
}
