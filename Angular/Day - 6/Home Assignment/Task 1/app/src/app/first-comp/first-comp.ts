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
  applyClass: boolean = false;

  arr: string[] = ['Item 1', 'Item 2', 'Item 3'];
  arr1: number[] = [1, 2, 3, 4, 5];

  shouldApplyClass(): void {
    this.applyClass = !this.applyClass;
  }

}
