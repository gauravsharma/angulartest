import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private loginService: LoginService,
    private router: Router
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
            } else {
              console.log('email/password invalid.');
            }
          },
          error => {
            console.log('node service is not running');
          }
    );
  }

}
