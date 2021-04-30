import { Component, OnInit } from '@angular/core';
import {AuthService,TokenPayload} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router
    )
     { 

  }

  ngOnInit(): void {
  }
  register() {
    this.authService.register(this.credentials).subscribe(() => {
      this.router.navigate(['/signin']);
    }, (err) => {
      console.error(err);
      
    });
  }
}
  /*signUp(){
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

}*/
