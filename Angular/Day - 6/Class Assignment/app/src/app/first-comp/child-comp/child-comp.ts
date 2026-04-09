import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
})
export class ChildComp {
  @Input() namegiven:string =''
}
