import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router : Router
  ) { }

users : any;

  ngOnInit() {
    this.userService.getUser()
    .subscribe(data =>{
       this.users = data;
      })
  }

  editUser(index){
    var id = this.users[index]._id;
    if(!id){
      return;
    }
    this.router.navigate(['edit/',id]);
  }

  deleteUser(index){
    var id = this.users[index]._id;
    this.userService.deleteUser(id)
    .subscribe(data => {
      this.users.splice(index,1);
    })
  }

}
