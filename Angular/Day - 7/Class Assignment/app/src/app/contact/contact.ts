import { Component } from '@angular/core';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInput, MatLabel, MatError],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
}
