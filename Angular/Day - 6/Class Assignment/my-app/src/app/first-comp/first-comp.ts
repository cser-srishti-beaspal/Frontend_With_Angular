import { Component, inject } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Services } from '../services/services';
import { Childcomp } from './childcomp/childcomp';
import { Test } from '../services/test';

@Component({
  selector: 'app-first-comp',
  imports: [NgClass, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, Childcomp],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
  providers:[Services]
})
export class FirstComp  {
  applyClass:boolean = false
  shouldApply(){
    this.applyClass = !this.applyClass
  }
  arr:number[] = [1,2,3,4,5,6,7,8,9,10]
  role = 'admin';

  constructor(protected data:Services ){
    this.data = data
  }
  test = inject(Test)//recommended approach
  namesArr : string[]=[]

}
