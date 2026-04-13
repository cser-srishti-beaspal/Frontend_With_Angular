import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitUserType } from '../../types/githubUser';
import { PlatzilUserType } from '../../types/PlatziUserType';
// import { loginType } from '../../types/loginType';
@Injectable({
  providedIn: 'root',
})


export class Http {
  httpClient = inject(HttpClient)

  baseUrl: string = 'https://api.escuelajs.co/api/v1/users'

  getUsers() {
    return this.httpClient.get<GitUserType[]>(this.baseUrl)
  }

  addUser(user: PlatzilUserType) {
    return this.httpClient.post(`${this.baseUrl}/`, user)
  }
  // login(user:loginType) {
  //   return this.httpClient.post<loginType>(${this.baseUrl}/auth/login,user)
  // } 
}