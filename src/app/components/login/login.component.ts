import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from './../../services/ums.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  access:boolean = false
  login:FormGroup = new FormGroup({
    'username': new FormControl(null , [Validators.required , Validators.minLength(4)]),
    'password': new FormControl(null , [Validators.required])
  })
  constructor(private _UmsService:UmsService , private _router:Router){}
ngOnInit(): void {
}

getAuth(){
  this._UmsService.login(this.login.value).subscribe((res) =>{
    this._router.navigateByUrl(`website/${res.id}`)
    localStorage.setItem("id" , res.id)
    this.access = false
  }, err =>{
    this.access = true
  })
}
}
