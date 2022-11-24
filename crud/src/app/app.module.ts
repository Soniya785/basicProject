import { MaterialModule } from './material.module';
import { DatabaseServiceService } from './_service/database.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToastrComponent } from './basicTask/toastr/toastr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegFormComponent } from './basicTask/reg-form/reg-form.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ToastrComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    closeButton: true,
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule, 
    ToastrModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseServiceService)
  ],
  providers: [DatabaseServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
