import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(){
    
    
  }
  toastrExpmle() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  swtAlrt(){
    Swal.fire('oops...' ,"Sweet Alert", 'error')
  }

}


