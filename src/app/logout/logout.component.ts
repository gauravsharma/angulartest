import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {  Http } from '@angular/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private http: Http) { }

  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser').length == 0) {
      console.log('no session found');
    }
  }


  logout() {
    console.log('in logout');
    if(localStorage.getItem('currentUser').length > 0) {
      localStorage.removeItem('currentUser');
      // this.router.navigate(['/login']);
      return this.http.get('/logout');
    }
  }

  goBack() {
    this.location.back();
  }

}
