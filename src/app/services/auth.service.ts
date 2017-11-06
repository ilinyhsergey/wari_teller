import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import {UserApi} from '../api/generated/api/UserApi';
import {LoginCredentials} from '../api/generated/model/LoginCredentials';
import {ActorSession} from '../model/ActorSession';
import {StorageService} from './storage.service';
import {Actor} from '../api/generated/model/Actor';

@Injectable()
export class AuthService {

  private static keyCurrentSession = 'sessionId';
  private static keyCurrentUser = 'currentUser';
  private static keyCurrentRedirectUrl = 'redirectUrl';

  private sessionId: number = null;
  private currentUser: Actor = null;
  private authToken: string = null;

  constructor(private userApi: UserApi,
              private storageService: StorageService) {
  }

  login(loginCredentials: LoginCredentials): Observable<boolean> {

    const observable = this.userApi.userLoginPost1(loginCredentials);
    observable.subscribe((actorSession: ActorSession) => {
      this.storageService.set(AuthService.keyCurrentSession, this.sessionId = actorSession.id);
      this.storageService.set(AuthService.keyCurrentUser, this.currentUser = actorSession.actor);

      console.log(`User  ${this.currentUser.firstName} ${this.currentUser.lastName} successfully logged in`);
    }, (err) => {
      console.log('err', err);
    });

    return observable.map((res) => true);
  }

  logout() {
    this.sessionId = null;
    this.currentUser = null;
    this.storageService.flush();
  }

  getSessionId(): number {
    return this.sessionId || (this.sessionId = +this.storageService.get(AuthService.keyCurrentSession));
  }

  getCurrentUser(): Actor {
    return this.currentUser || (this.currentUser = this.storageService.get(AuthService.keyCurrentUser));
  }

  getAuthorization(): string {
    return (this.sessionId && this.authToken)
      ? ('Bearer ' + this.authToken)
      : undefined;
  }
}
