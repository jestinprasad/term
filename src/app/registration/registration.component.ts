import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  regForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  })

//   onSubmit() {
//     this.userService.createUser(this.regForm.value).subscribe(data => { 
// console.log(data);
//     })
//    }
   onSubmit() {
   // const {value} = form;
    this.userService.createUser(this.regForm.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/view']);
      
    })
  }



}
