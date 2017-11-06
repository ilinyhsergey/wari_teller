import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

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

  constructor(private storageService: StorageService) {
  }

  handleLogin(actorSession: ActorSession) {
    this.storageService.set(AuthService.keyCurrentSession, this.sessionId = actorSession.id);
    this.storageService.set(AuthService.keyCurrentUser, this.currentUser = actorSession.actor);

    console.log(`User  ${this.currentUser.firstName} ${this.currentUser.lastName} successfully logged in`);
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

  setAuthorization(authorization: string) {
    if (authorization) {
      const split = authorization.split(' ');
      if (split.length > 1 && split[0] === 'Bearer') {
        this.authToken = split[1];
      }
    }
  }
}
