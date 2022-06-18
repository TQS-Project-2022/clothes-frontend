import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  navigateToMainPage(){
    this.router.navigate(['']);
  }

  logIn(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    console.log(username, password);
    this.router.navigate(['']);
  }

}
