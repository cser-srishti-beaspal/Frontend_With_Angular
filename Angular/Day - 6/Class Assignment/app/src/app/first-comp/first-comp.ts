import { Component, Input } from '@angular/core';
import { ChildComp } from "./child-comp/child-comp";

@Component({
  selector: 'app-first-comp',
  imports: [ChildComp],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  namegiven : string = "hi there !!"
}
