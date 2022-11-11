import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrComponent } from './basicTask/toastr/toastr.component';

const routes: Routes = [
  { path: 'Toastr', component: ToastrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
