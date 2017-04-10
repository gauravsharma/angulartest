import { Component, OnInit } from '@angular/core';
declare var google: any;
declare var center: any;
declare var map: any;

@Component({
  selector: 'app-mycomponent4',
  templateUrl: './mycomponent4.component.html',
  styleUrls: ['./mycomponent4.component.css']
})
export class Mycomponent4Component implements OnInit {
  lat: number = 37.769725;
  lng: number = -122.462154;

  constructor() {


  }

  ngOnInit() {

  }

}
