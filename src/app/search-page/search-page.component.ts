import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { User } from './../models/user';
import { Planet } from './../models/planet';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  users: User[];
  planets: Planet[];
  searchValue: string;
  counter = 60;
  count = 0;
  interval: number;
  isSpinner: boolean = false;
  isDisabled: boolean = false;
  credential: any;
  constructor(private _service: AuthenticationService, private _router: Router) { }
 
  ngOnInit() {
    this._service.users$.subscribe(users => {
      if(users){
        this.users = users;
      }else{
        this._router.navigate(["/login"]);
      }
    }) 
  }

  onChange(){
    this.credential = JSON.parse(localStorage.getItem('currentUser'));
    if(this.credential && this.credential.username.toUpperCase() === "LUKE SKYWALKER" && this.credential.password.toUpperCase() === "19BBY"){
      this.subscribe();
    }else{
        if(this.count < 15) { 
           this.subscribe() 
        }else{this.searchValue = "";this.isDisabled = true;}
    }
    if(this.count == 0){
        this.interval = setInterval(() => {
          console.log(this.counter);
          this.counter--;
          if(this.counter < 0 ){
            clearInterval(this.interval);
            this.count = 0;
            this.counter = 60;
            this.isDisabled = false;
            console.log("get count here :", this.count, "and counter", this.counter)
          };
        }, 1000);
    }
    this.count++;
    console.log("check again :", this.count)
  } 
  subscribe(){
    this.isSpinner = true;
      this._service.getPlanet(this.searchValue).subscribe(planets=>{
        if(planets){
          this.planets = planets.filter(planet => !isNaN(Number(planet.population)))
          this.isSpinner = false;
          if(!this.searchValue){
            this.planets = [];
          }          
        }
      });
  }
  logout(){
    this._router.navigate(["/login"]);
    localStorage.removeItem('currentUser');
    clearInterval(this.interval);
  }
}