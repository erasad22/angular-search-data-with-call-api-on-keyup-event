import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

import { User } from './../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  user: User;
  credential: any = { username: "", password: "" }
  message: string = "";
  loading: boolean = false;
  constructor(private _service: AuthenticationService,
      private router: Router) {}

  ngOnInit() {}
  
  onSubmit(){
    this.loading = true;
    this._service.getLogin(this.credential).subscribe(users => {
      this.users = users;
      this.loading = false;
    let isCredential = this.users.find((user: User)=> user.name && user.name.toUpperCase() == this.credential.username.toUpperCase() && user.birth_year && user.birth_year.toUpperCase() == this.credential.password.toUpperCase());
    if(isCredential){
      this.router.navigate(["/search-page"]);
      this.message = "";
    }else{
      this.message = "Username and password is incorrect";
    }
    });
  }
}