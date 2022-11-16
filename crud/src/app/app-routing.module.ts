import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './basicTask/reg-form/reg-form.component';
import { ToastrComponent } from './basicTask/toastr/toastr.component';

const routes: Routes = [
  { path: 'toastr', component: ToastrComponent },
  { path: 'reg', component: RegFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
