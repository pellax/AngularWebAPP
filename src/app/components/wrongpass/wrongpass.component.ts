import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-wrongpass',
  templateUrl: './wrongpass.component.html',
  styleUrls: ['./wrongpass.component.css']
})
export class WrongpassComponent implements OnInit {

  constructor(authService:AuthService, router:Router) { }

  ngOnInit(): void {
  }

}
