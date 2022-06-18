import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    age: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  navigateToMainPage() {
    this.router.navigate([''])
  }

  register(){
    let username = this.registerForm.value.username;
    let email = this.registerForm.value.email;
    let age = this.registerForm.value.age;
    let password = this.registerForm.value.password;

    console.log(username, email, age, password);

    this.router.navigate(['login'])
  }

}
