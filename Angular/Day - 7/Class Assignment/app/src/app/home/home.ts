

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButton],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  displayedColumns = ['name', 'age', 'city'];
  data = [
    {
      name: 'Srishti',
      age: 21,
      city: 'Delhi'
    },
    {
      name: 'Devu',
      age: 20,
      city: 'Mumbai'
    },
    {
      name: 'Aarti',
      age: 21,
      city: 'Bangalore'
    }
  ];
}