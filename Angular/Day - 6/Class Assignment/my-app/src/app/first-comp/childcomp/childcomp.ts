import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Services } from '../../services/services';

@Component({
  selector: 'app-childcomp',
  imports: [],
  templateUrl: './childcomp.html',
  styleUrl: './childcomp.css',
  providers:[Services],
})
export class Childcomp {
  @Input() namegiven:string=""

  @Output() data = new EventEmitter<string>()
    sendDataToParent(){
    this.data.emit("Hello from Child");
  }

  ser = inject(Services)
  d:string[]=[]
  addName(data:string) {
    this.ser.name.push(data);
    console.log(this.ser.name);
  }
}
