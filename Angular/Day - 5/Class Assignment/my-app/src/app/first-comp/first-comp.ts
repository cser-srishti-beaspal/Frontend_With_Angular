import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name:string = "Srishti"
  style:string = `color:red;`
  isHidden: boolean = false
  ipVal :string = ''

  click(){
    this.isHidden = !this.isHidden
  }
  // inputValChange(str : any){
  //   console.log(str);
  //   this.ipVal = str;
  //   console.log(this.ipVal)
  // }
}
