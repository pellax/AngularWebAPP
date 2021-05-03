import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-my-raspis',
  templateUrl: './my-raspis.component.html',
  styleUrls: ['./my-raspis.component.css']
})
export class MyRaspisComponent implements OnInit {

  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
