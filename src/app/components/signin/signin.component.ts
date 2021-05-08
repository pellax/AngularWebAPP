import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email:'',
    password:''
  };

  constructor(  private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/signin']);
  }, 5000); 
  }
  /*
  login() {
    this.authservice.login(this.credentials).subscribe(() => {
      this.router.navigate(['/private'])
    }, (err) => {
      console.error(err);
    });
  }
}
  */
  signIn(){
    this.authservice.signIn(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/private'])

      },
        err => {
          this.router.navigate(['/signin/wrongpass'])
          console.log(err)
        }
    )

  }

}
