import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user?:User;
  constructor(private serv:UmsService){}
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.serv.getUsers().subscribe((res) =>{
      this.user = res.users[Number(localStorage.getItem("id")) - 1]
    })
  }
}
