import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
// registForm:FormGroup= new FormGroup({});
registForm: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(){
    this.setFormState();
  }
setFormState(){
  this.registForm = this.fb.group({
    id:[0],
    title: ['', Validators.required],
    firstName: ['', Validators.compose([ Validators.required, Validators.minLength(3)])],
    lastName: ['', Validators.compose([ Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([ Validators.required, Validators.email])],
    dob: ['', Validators.compose([ Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])],
    pswrd: ['', Validators.compose([ Validators.required, Validators.minLength(5)])],
    confirmPswrd: ['', Validators.compose([ Validators.required, Validators.minLength(3)])],
    acceptTerm: [false, Validators.required]
  })
}

onSubmit()
{
if(this.registForm.invalid){
return;
}

}

onCancel(){
  this.registForm.reset();
}
}
