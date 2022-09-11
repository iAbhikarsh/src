import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../datasource/users';
import { UserService } from '../../services/user.service';
import {List} from 'immutable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;
  users:List<User>;
  error:string;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm():void{
    this.loginFormGroup=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onClickLogin():void{
    if(this.loginFormGroup.valid)
    {
      const user=new User();
      user.userName=this.loginFormGroup.controls['userName'].value;
      user.password=this.loginFormGroup.controls['password'].value;

  
      const users=JSON.parse(localStorage.getItem('users') || '{}');
      if(users!=null){
        //navigate
        debugger
        this.router.navigate(['/home'])
      }
      else{
        this.error="Incorrect Username or Password"
      }
      
    }
  }

}
