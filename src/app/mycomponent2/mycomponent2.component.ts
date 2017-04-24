import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent2',
  templateUrl: './mycomponent2.component.html',
  styleUrls: ['./mycomponent2.component.css']
})
export class Mycomponent2Component implements OnInit {

  tabs: number;

  constructor() {
    this.tabs = 5;
  }

  ngOnInit() {
    var allTabs = document.querySelectorAll('.tm-tab-content-box');
    var i;
    for (i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.add('sr-only');
    }

    document.querySelector('#tab1C').classList.remove('sr-only');
  }

  showTab(tabId: string) {
    var t = tabId;

    for (var i = 0; i < document.querySelectorAll('.tm-tab-content-box').length; i++) {
      document.querySelectorAll('.tm-tab-content-box')[i].classList.add('sr-only');
    }

    for (var i = 0; i < document.querySelectorAll('.tm-tab-link').length; i++) {
      document.querySelectorAll('.tm-tab-link')[i].classList.remove('active');
    }
    document.querySelector('#' + t).classList.add('active');

    document.querySelector('#' + t+'C').classList.remove('sr-only');
    document.querySelector('#' + t+'C').classList.add('show');
  }

}
