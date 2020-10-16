import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/register.model';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  register=new Register;
  submitted=false;
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.submitted = true;
  this.registerService.addvisitor(this.register)
  .subscribe(data => console.log(data), error => console.log(error));
  this.register = new Register();
  this.router.navigate(['/register']);
}

}
