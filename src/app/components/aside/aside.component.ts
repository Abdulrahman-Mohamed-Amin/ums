import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{
  currentUser?:User;
  constructor(private _activeted:ActivatedRoute , private _service:UmsService){}
  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser(){
    this._service.getUsers().subscribe((res) =>{
      this.currentUser = res.users[Number(localStorage.getItem('id')) - 1]
      
    })
  }
}
