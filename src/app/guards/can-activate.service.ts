import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('isLoggedin')) {
      console.log("Allowed inside - Landing Screen is shown")
      return true
    }
    else {

      console.log("Provide Creds in Login Screen")
      this.router.navigate(['login'])
      return false
    }
  }
}
