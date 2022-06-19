import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";

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
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  navigateToMainPage(){
    this.router.navigate(['']);
  }

  logIn(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    if(!username || !password) return;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['']);
      }
    })


  }

}
