import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-editbutton',
  templateUrl: './editbutton.component.html',
  styleUrls: ['./editbutton.component.css']
})
export class EditbuttonComponent implements OnInit {
button =
{
  color:'',
  nametag:'',
  purpose:'',
  frequency:''
};
  constructor(public authService:AuthService,private router:Router) { 
    this.button.color =this.authService.getColor()
  }

  ngOnInit(): void {
  }
  submitButton(){
  this.authService.submitButton(this.button)
  .subscribe(
    res => {
      console.log(res)
      
      this.router.navigate(['/private/configraspi/configureok'])

    },
      err => {
        this.router.navigate(['/private/configraspi/comunerr'])
        console.log(err)
      }
  )

}



}

