import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import {RaspberryService} from '../../services/raspberry.service'

@Component({
  selector: 'app-add-raspi',
  templateUrl: './add-raspi.component.html',
  styleUrls: ['./add-raspi.component.css']
})
export class AddRaspiComponent implements OnInit {
raspi={
  serial_number:'',
  pin:''
}
  constructor(private authservice: AuthService,
    private router: Router,private raspberryService:RaspberryService) { }

  ngOnInit(): void {
  }
addRaspi(){
this.raspberryService.addRaspy(this.raspi)
.subscribe(
  res =>{
    console.log(res)
     this.router.navigate(['/addraspi/raspiaddedok']);
  },
  err =>{
    console.log(err)
    this.router.navigate(['/addraspi/raspiaddedfail']);


  }
)

}
}
