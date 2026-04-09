import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test {
  // nameArr : string[]=["abc","def"]
  nameArr = signal<string[]>(["abc","def"])
}
