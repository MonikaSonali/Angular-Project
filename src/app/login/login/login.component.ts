import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../../services/globalservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;

  constructor(public global: GlobalserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    localStorage.setItem('isLoggedin', 'true')

    console.log("Creds---", this.userName, "---", this.password)
    this.router.navigate(['pages/landing'])
  }

}
