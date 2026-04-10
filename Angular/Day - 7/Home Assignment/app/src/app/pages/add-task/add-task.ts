import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector:'app-add-task',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./add-task.html'
})
export class AddTask {

  taskService = inject(Task);

  taskData = {
    title:'',
    status:'pending'
  };

  addTask(){
    this.taskService.addTask({...this.taskData});

    this.taskData = { title:'', status:'pending' };
  }
}
