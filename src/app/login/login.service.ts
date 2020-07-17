import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from './domain';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly loginUrl = 'https://reqres.in/api/login';
  constructor(private httpClient: HttpClient) { }

  login(formBody: LoginData) {
    return this.httpClient.post(this.loginUrl, formBody)
  }

}
