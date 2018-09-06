import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  user = {};
  id: any;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private userService : UserService,
    private fb : FormBuilder,
    private valservice: ValidationService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.route.snapshot.params['id'])
    .subscribe(data => {
      this.editForm.patchValue(data);
    })
  }

  editForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });

  updateUser(id) {
    const data = this.editForm.value;

    this.userService.updateUser(id, data)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/view']);
        }, (err) => {
          console.log(err);
        }
      )
      }

}
