import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {  Http } from '@angular/http';
import { LoginService } from '../services/login.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('inputEmail') inputEmail: ElementRef;
  @ViewChild('inputPassword') inputPassword: ElementRef;
  msgs = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
  }

  login() {
    var email = this.inputEmail.nativeElement.value;
    var password = this.inputPassword.nativeElement.value;
    return this.loginService.login(email, password)
      .subscribe(searchRes => {
            if(searchRes.length) {
              localStorage.setItem('currentUser', JSON.stringify(searchRes[0]));
              this.router.navigate(['/4']);
              this.http.get('/4');
            } else {
              console.log('email/password invalid.');
              this.msgs.push({severity:'warn', summary:'Message', detail:'Email/Password invalid.'});
            }
          },
          error => {
            console.log('node service is not running');
            this.msgs.push({severity:'error', summary:'Message', detail:'Node service is not running.'});
          }
    );
  }
}
