import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVisitorComponent } from './dailyregister/add-visitor/add-visitor.component';
import { EditVisitorComponent } from './dailyregister/edit-visitor/edit-visitor.component';
import { RegisterHomeComponent } from './dailyregister/register-home/register-home.component';

const routes: Routes = [
  {path:'' ,redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterHomeComponent},
  {path:"editvisitor/:id" , component:EditVisitorComponent},
  {path:"addvisitor",component:AddVisitorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
