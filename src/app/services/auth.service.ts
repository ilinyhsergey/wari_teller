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
  private static keyAuthToken = 'authToken';
  private static keyCurrentRedirectUrl = 'redirectUrl';

  private sessionId: number = null;
  private currentUser: Actor = null;
  private authToken: string = null;

  constructor(private storageService: StorageService) {
    this.getSessionId();
    this.getCurrentUser();
    this.getAuthToken();
  }

  handleLogin(actorSession: ActorSession) {
    this.setSessionId(actorSession.id);
    this.setCurrentUser(actorSession.actor);

    console.log(`User  ${this.currentUser.firstName} ${this.currentUser.lastName} successfully logged in`);
  }

  logout() {
    this.sessionId = null;
    this.currentUser = null;
    this.authToken = null;
    this.storageService.flush();
  }

  isUserLoggedIn(): boolean {
    return !!this.sessionId && !!this.authToken;
  }

  getSessionId(): number {
    return this.sessionId || (this.sessionId = +this.storageService.get(AuthService.keyCurrentSession));
  }

  setSessionId(sessionId: number) {
    this.storageService.set(AuthService.keyCurrentSession, this.sessionId = sessionId);
  }

  getCurrentUser(): Actor {
    return this.currentUser || (this.currentUser = this.storageService.get(AuthService.keyCurrentUser) as Actor);
  }

  setCurrentUser(currentUser: Actor) {
    this.storageService.set(AuthService.keyCurrentUser, this.currentUser = currentUser);
  }

  getAuthToken(): string {
    return this.authToken || (this.authToken = this.storageService.get(AuthService.keyAuthToken) as string);
  }

  setAuthToken(authToken: string) {
    this.storageService.set(AuthService.keyAuthToken, this.authToken = authToken);
  }

  getAuthorization(): string {
    const authToken = this.getAuthToken();
    return authToken
      ? ('Bearer ' + authToken)
      : undefined;
  }

  setAuthorization(authorization: string) {
    if (authorization) {
      const split = authorization.split(' ');
      if (split.length > 1 && split[0] === 'Bearer') {
        this.authToken = split[1];
        this.setAuthToken(this.authToken);
        console.log('Set Authorization token:', this.authToken);
      }
    }
  }
}
