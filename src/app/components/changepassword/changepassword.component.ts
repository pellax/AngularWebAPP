import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ChangepasswordService} from '../../services/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
pass={
  oldpass:'',
  newpass:'',
  newpasscop:''
}
  constructor(private changePassword:ChangepasswordService,private router:Router) { }

  ngOnInit(): void {
  }
changePass(){
  this.changePassword.changePassword(this.pass)
  .subscribe(
    res =>{
      this.router.navigate(['/private/profile/changepassword/changepasswordok'])

    },
    err => {
      this.router.navigate(['/private/profile/changepassword/changepasswordfail'])
    }
  )

}
}
