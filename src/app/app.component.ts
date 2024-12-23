import { Component, OnInit } from '@angular/core';
import { UmsService } from './services/ums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private umsservice:UmsService){}
  ngOnInit(): void {
    this.getAllusers()
  }

  getAllusers(){
    this.umsservice.getUsers().subscribe((res) =>{
      // res[1].username = "abdo"
      console.log(res);
      
    })
  }

}
