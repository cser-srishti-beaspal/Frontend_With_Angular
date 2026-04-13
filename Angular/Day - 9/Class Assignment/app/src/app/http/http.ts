import { Component, inject, signal } from '@angular/core';
import { Http as HttpService } from '../services/http'; 
import { GitUserType } from '../../types/githubUser'; 
import { OnInit} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { PlatzilUserType } from '../../types/PlatziUserType';

@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})

export class Http implements OnInit{
  httpData = inject(HttpService)
  userData=signal<GitUserType[]>([])
  
  ngOnInit():void {
    this.httpData.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userData.set(data);
      },

      error: (errors) => {
        console.log(errors);
      },
      complete: () => {
        console.log("data recived successfully");
      }
    })
  }

  user:PlatzilUserType={
    name:'Srishti',
    avatar:"https://i.pinimg.com/originals/16/f3/15/16f3158eab90cca32a1f735566c9eb22.jpg",
    email:"srishti@gmail.com",
    password:"12345"
  }
  addNewUser() {
    this.httpData.addUser(this.user).subscribe({
      next:(data)=> {
        console.log(data)
      },
      error: (errMsg) => {
        console.log(errMsg)
      },
      complete: () => {
        console.log("user added successfully")
      
      }
    })
  }


}