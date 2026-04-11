import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.minLength(4), Validators.required,checkPass]),
    currency : new FormControl('',[Validators.required]),
    gender : new FormControl(),
    tnc : new FormControl(),
    skills : new FormArray([]),
    conpass : new FormControl('',[Validators.minLength(4), Validators.required]),
  })

  handleSubmit(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }

  public get skills(){
    return this.loginForm.get('skills') as FormArray;
  }

  handleCheckboxes(event:Event){
    console.log(event);
    let html = event.target as HTMLInputElement;

    if(html.checked){
      this.skills.push(new FormControl(html.value));
    }else{
      let index = this.skills?.controls.findIndex((ele) => ele.value === html.value);
      this.skills.removeAt(index);
    }
  }
}
export function checkPass(control: AbstractControl): ValidationErrors | null {

  const value = control.value;
  if (!value) return null;

  let hasLetter = false;
  let hasNumber = false;

  for (let ch of value) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      hasLetter = true;
    }
    if (ch >= '0' && ch <= '9') {
      hasNumber = true;
    }
  }

  if (hasLetter && hasNumber) {
    return null; 
  }

  return { alphaNumeric: true }; 
}