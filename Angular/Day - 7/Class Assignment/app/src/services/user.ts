import { Injectable } from '@angular/core';
import { UserTypes } from '../types/usertypes';

@Injectable({
  providedIn: 'root',
})

export class User{
    userData : UserTypes[] =[
        {name:"Srishti",
        role:"Developer",
        image:'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {name:"Devu",
        role:"Developer",
        image:'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {name:"Surbhi",
        role:"Developer",
        image:'https://randomuser.me/api/portraits/men/3.jpg',
        }
    ]

    addUser(user:UserTypes){
        this.userData.push(user);
        console.log(this.userData);
    
    }
}
