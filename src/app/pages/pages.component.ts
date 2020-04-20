import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template:`<app-menu>
  <router-outlet></router-outlet>
  </app-menu>`
  
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
