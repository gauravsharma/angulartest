import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent2',
  templateUrl: './mycomponent2.component.html',
  styleUrls: ['./mycomponent2.component.css']
})
export class Mycomponent2Component implements OnInit {

  tabs:number;

  constructor() { 
    this.tabs = 5;
  }

  ngOnInit() {
    var allTabs = document.querySelectorAll('.tm-tab-content-box');
    var i;
    for (i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.add('sr-only');
    }
  }

  showTab(tabId: string) {
    var t = tabId;
    console.log(t);

    document.querySelector('.tm-tab-content-box').classList.add('sr-only');

    document.querySelector('#' + t).classList.remove('sr-only');
    document.querySelector('#' + t).classList.add('show');
  }

}
