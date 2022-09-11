import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../datasource/users';

import {List} from 'immutable';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _users: BehaviorSubject<List<User>> = new BehaviorSubject(List<User>([]));

  public readonly todos: Observable<List<User>> = this._users.asObservable();

  constructor() { 
    
  }

  addUser(user:User):void{
      this._users.next(this._users.getValue().push(user));
  }
}
