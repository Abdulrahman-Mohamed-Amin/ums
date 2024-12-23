import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UmsService } from 'src/app/services/ums.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  user?:User;
  constructor(private serv:UmsService ,private activeted:ActivatedRoute){}
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.serv.getUsers().subscribe((res) =>{
      this.user = res.users[Number(this.activeted.snapshot.params['id']) - 1]
    })
  }
}
