import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router) {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    this._router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }
}
