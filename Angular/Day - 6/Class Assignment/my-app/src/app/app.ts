import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComp } from './first-comp/first-comp';
import { Childcomp } from "./first-comp/childcomp/childcomp";  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComp, Childcomp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  
}
