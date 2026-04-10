import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports:[RouterModule],
  standalone:true,
  templateUrl:'./navbar.html'
})
export class Navbar {}