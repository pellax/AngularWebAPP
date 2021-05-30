import { Component, OnInit} from '@angular/core';
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
raspis=[];
selectedRef:string ='';
state:boolean=false;
serial_number = ''
  constructor(private authservice: AuthService,
    private router: Router,private raspiService:RaspberryService) { }

  ngOnInit(): void {
    this.raspiService.listRaspis()
    .subscribe(
      res =>
      { 
        console.log(res)
        this.raspis= res
        console.log(this.raspis[0].serial_number)
        this.state = true;
      },
     err => {
     console.log(err) 
    
    }
    )

  }
  radioChangehandler(event:any){
this.selectedRef= event.target.value;
this.serial_number= this.selectedRef
  }
 getState(){
   return state;
 }
 deleteRaspi(){
 this.raspiService.deleteRaspy(this.serial_number)
 .subscribe(
   res =>{


   },
   err =>{

   }

 )
 }
 addRaspi(){

 }
}
