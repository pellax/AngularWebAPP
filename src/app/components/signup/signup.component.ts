import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user = {
  email:'',
 username:'',
 password:''
}
  constructor(
    private authService: AuthService,
    private router: Router
    )
     { 

  }

  ngOnInit(): void {
  }
  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        if(res.message == 'ok')
        {
        //localStorage.setItem('token',res.token);
        console.log('User created successfuly')
        this.router.navigate(['/signin']);
        }
        else {
          this.router.navigate(['/signin/error'])
        }
      },
      err => console.log(err)
      )
    
    }

}
