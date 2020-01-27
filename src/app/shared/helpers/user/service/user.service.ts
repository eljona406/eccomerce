import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { User } from '../model/user';

@Injectable()
export class SharedUserService {
  me: User | null;
  usersLoaded: boolean;
  users: User[];

  constructor(private httpClient: HttpClient) {
    this.me = null;

    this.usersLoaded = false;
    this.users = [];
  }

  login(username: string, password: string): Observable<boolean> {
    return this.usersGet().pipe(map((users: User[]) => {
      for (const user of users) {
        if (user.username === username && user.password === password) {
          this.me = user;
          return true;
        }
      }

      return false;
    }));
  }

  register(username: string, password: string): Observable<boolean> {
    return this.usersGet().pipe(map((users: User[]) => {
      for (const user of users) {
        if (user.username === username) {
          return false;
        }
      }

      return true;
    }));
  }

  logout(): Observable<boolean> {
    this.me = null;
    return new Observable<boolean>((subscriber: Subscriber<boolean>) => subscriber.next(true)).pipe(take(1));
  }

  usersGet() {
    if (this.usersLoaded) {
      return new Observable<User[]>((subscriber: Subscriber<User[]>) => subscriber.next(this.users)).pipe(take(1));
    }

    return this.usersRequest();
  }

  private usersRequest(): Observable<User[]> {
    return this.httpClient.get<any>('./assets/server/user.json').pipe(take(1),
      catchError((error: any, caught) => {
        return caught;
      }), map(userResponse => {
        this.usersLoaded = true;

        for (const user of userResponse) {
          this.users.push(new User(user));
        }

        return this.users;
      }));
  }
}
