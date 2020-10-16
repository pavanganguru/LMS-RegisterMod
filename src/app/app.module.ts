import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { EditVisitorComponent } from './dailyregister/edit-visitor/edit-visitor.component';
import { AddVisitorComponent } from './dailyregister/add-visitor/add-visitor.component';
import { RegisterHomeComponent } from './dailyregister/register-home/register-home.component';
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterHomeComponent,
    EditVisitorComponent,
    AddVisitorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
