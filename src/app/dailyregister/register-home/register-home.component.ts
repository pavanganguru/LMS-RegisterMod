import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,Subject } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { RegisterService } from 'src/app/services/register.service';



@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router) { }
  register : Observable<ApiResponse>;
  ngOnInit(): void {
    this.register=this.registerService.getregister();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
    
  }

  addvisitor(){
    this.router.navigate(['addvisitor'])
  }

  editvisitor(id:number){
    this.router.navigate(['editvisitor',id])
  }

}
