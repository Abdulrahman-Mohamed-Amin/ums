import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:User[] = JSON.parse(localStorage.getItem('arr')!)
  p:number = 1
  constructor(private service:UmsService){}

  ngOnInit(): void {
    this.getAllusers()
  }
  getAllusers(){
    this.service.getUsers().subscribe((res) =>{
      this.users = res.users
      localStorage.setItem('arr', JSON.stringify(this.users))
      
    }, err=>{
      console.log(err);
      
    })
  }
  delete(i:number){
    this.users.splice(i , 1)
    localStorage.setItem('arr', JSON.stringify(this.users))
  }
}
