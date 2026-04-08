import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('app');
  title = 'taskapp';
  currview = 'question';
  quesindex = 0;
  taskindex = 0;
  
  questions = [
    'what is pythagores theorem',
    'Is sum of two sides is all greater than the third side',
    'what is venn diagram ?',
    'Formula for Cylinder TSA',
    'why we calculate discriminant in quadratic equation'
  ];
  
  tasks = [
    'task 1 - do mathematics work',
    'task 2 - do sst work',
    'task 3 - do english work',
    'task 4 - do hindi work',
    'task 5 - do science work'
  ];
  
  nextques() {
    this.currview = 'question';
    this.quesindex = (this.quesindex + 1) % this.questions.length;
  }
  
  nexttask() {
    this.currview = 'task';
    this.taskindex = (this.taskindex + 1) % this.tasks.length;
  }
}
