import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-raspi',
  templateUrl: './add-raspi.component.html',
  styleUrls: ['./add-raspi.component.css']
})
export class AddRaspiComponent implements OnInit {
raspi={
  ref:''
}
  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
addRaspi(){

}
}
