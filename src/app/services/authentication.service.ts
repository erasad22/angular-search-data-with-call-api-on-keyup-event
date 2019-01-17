import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Data, User} from '../models/user';
import { PlanetData, Planet} from '../models/planet';

@Injectable()
export class AuthenticationService {
  users: User[];
  planets: Planet[];
  users$: BehaviorSubject<User[]>;

  private _getApi = "https://swapi.co/api/people/?search=";
  private _getPlanetApi = "https://swapi.co/api/planets/?search=";
  constructor(private http: HttpClient) {
        this.users$ = new BehaviorSubject<User[]>(this.users)
  }

  getLogin(credential: any){
    return this.http.get(this._getApi)
    .pipe(map(response => {
                let data = Data.deserialise(response);
                this.users = data.results;
                localStorage.setItem('currentUser', JSON.stringify(credential));
                console.log("get list of users :", data, "and currentuser:", localStorage)
                this.users$.next(this.users);
                return this.users;
            }));
  }
  getPlanet(value: any){
    return this.http.get(this._getPlanetApi + value)
    .pipe(map(response => {
                let planet = PlanetData.deserialise(response);
                this.planets = planet.results;
                console.log("get list for planet:", this.planets)
                return this.planets;
            }));
  }
}