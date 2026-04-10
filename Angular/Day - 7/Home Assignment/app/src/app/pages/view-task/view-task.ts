import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Task } from '../../services/task';
import { NgFor } from "@angular/common";
@Component({
  selector: 'app-view-task',
  imports: [NgFor, NgIf],
  standalone:true,
  templateUrl: './view-task.html',
  styleUrl: './view-task.css',
})
export class ViewTask {

  task = inject(Task);
  tasks:any[] = [];
  filteredTasks:any[] = [];

  filter:string = 'all';

  ngOnInit(){
    this.tasks = this.task.getTasks();
    this.applyFilter('all');
  }

  applyFilter(type:string){
    this.filter = type;

    if(type === 'pending'){
      this.filteredTasks = this.tasks.filter(t => t.status === 'pending');
    }
    else if(type === 'finished'){
      this.filteredTasks = this.tasks.filter(t => t.status === 'finished');
    }
    else{
      this.filteredTasks = this.tasks;
    }
  }

  

}