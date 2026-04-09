import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-comp.html',
  styleUrls: ['./first-comp.css'],
})
export class FirstComp {
  viewType: string = '';  

  students = [
    { name: 'Aarav Sharma', roll: 101, branch: 'Computer Science' },
    { name: 'Ishita Verma', roll: 102, branch: 'Information Tech' },
    { name: 'Karan Mehta', roll: 103, branch: 'Electronics' },
    { name: 'Priya Singh', roll: 104, branch: 'Mechanical' },
    { name: 'Rohit Patel', roll: 105, branch: 'Civil' }
  ];

  changeView(view: string) {
    this.viewType = view;
  }
}