import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  hide = true;
  isLogin = false;
  matcher = new MyErrorStateMatcher();
  usernameControl: FormControl;
  passwordControl: FormControl;

  constructor(private _authService: AuthService, private router: Router) {
    this.usernameControl = new FormControl('', [Validators.required]);
    this.passwordControl = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  public submit() {
    this.router.navigate(['/dashboard']);
  }

  isValid() {
    if (this.isLogin) {
      return false;
    }
    if (!this.usernameControl.valid) {
      return false;
    }
    if (!this.passwordControl.valid) {
      return false;
    }
    return true;
  }
}