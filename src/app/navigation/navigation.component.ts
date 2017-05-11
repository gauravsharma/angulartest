import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isLoggedIn:boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    }
  }

}
