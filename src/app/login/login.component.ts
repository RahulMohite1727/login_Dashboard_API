import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginData } from './domain';
import { LoggingService } from '../logger/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loggingService: LoggingService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null],
      password: [null]
    })
  }
  submit() {
    let formData = {} as LoginData
    formData.email = this.loginForm.controls.userName.value
    formData.password = this.loginForm.controls.password.value
    this.loginService.login(formData).subscribe(result => {
      console.log("result ", result);

      sessionStorage.setItem('currentUser', JSON.stringify(result))
      this.router.navigate(['./dashboard']);
      let msg = 'user logged in';
      this.loggingService.logStatus(msg)


      // else {
      //   alert("Wrong User Name And Password")
      // }
    })


  }
}
