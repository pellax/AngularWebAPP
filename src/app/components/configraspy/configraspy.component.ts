import { Component, OnInit } from '@angular/core';
import { ButtonGroup } from 'src/app/interfaces/button-group';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import { RaspberryService } from '../../services/raspberry.service'



@Component({
  selector: 'app-configraspy',
  templateUrl: './configraspy.component.html',
  styleUrls: ['./configraspy.component.css']
})
export class ConfigraspyComponent implements OnInit{
raspis =[]
state:boolean = false
selectedRaspi=''


    

  constructor(private authService:AuthService, private raspiService:RaspberryService,router:Router) { }

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
  submitRed(){
    this.authService.setReference(this.selectedRaspi)
    this.authService.setRed()
  }
  submitGreen(){
    this.authService.setGreen()
  }
  submitBlue(){
  this.authService.setBlue()
}
selectChangeHandler (event: any) {
  //update the ui
  this.selectedRaspi = event.target.value;
}
}   

