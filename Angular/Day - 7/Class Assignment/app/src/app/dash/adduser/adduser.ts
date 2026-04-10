import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../services/user';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule, ],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {

  
  UserData={
    name:"",
    role:"",
    image:"",
  }

  userService = inject(User);
  // handleSubmit(data:any){
  //   console.log(data);
  // }
  handleSubmit(data: any) {
    console.log("Form Data:", data);
    this.userService.addUser(data);   // send data to service

    // reset form fields after submit
    this.UserData = {
      name: "",
      role: "",
      image: ""
    };
  }
}
