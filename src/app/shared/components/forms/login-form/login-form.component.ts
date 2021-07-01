import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm } from '@shared/models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  credentials: ILoginForm = {
    email: '',
    password: ''
  };
  constructor(private _router: Router) {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this._router.navigate(['task']);
  }

  ngOnInit() {}
}
