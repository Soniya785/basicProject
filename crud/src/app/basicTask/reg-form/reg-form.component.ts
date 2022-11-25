import { UserData } from './../../_service/users.interface';
import { UserService } from './../../_service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/_service/database.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
// registForm:FormGroup= new FormGroup({});
registForm: FormGroup;
users : UserData[] = [];
  constructor(private fb : FormBuilder, private toastr: ToastrService, private _userService : UserService, private _dataBaseService : DatabaseServiceService) { }

  ngOnInit(){
    this.setFormState();
    this.getAllUsers()
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
getAllUsers(){
this._userService.getUsers().subscribe((res: UserData[] )=> {
  // debugger;
  console.log(res);
this.users = res;
})
}
editClick(userId : number){
alert(userId) //For Knowning ID
}

deleteClick(userId : number){
  // alert(userId) //For Knowning ID
// this._userService.deleteUser(userId).subscribe(res => {
//   this.getAllUsers();
//   this.toastr.success('Delete Successfully', 'Toastr fun!');
// });

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this._userService.deleteUser(userId).subscribe(res => {
  this.getAllUsers();
  this.toastr.success('Delete Successfully', 'Toastr fun!');

});
    // // Swal.fire(
    // //   'Deleted!',
    // //   'Your file has been deleted.',
    // //   'success'
    // )
  this.toastr.success('Delete Successfully', 'Toastr fun!');

  }
})
}
}
