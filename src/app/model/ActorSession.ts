import * as models from '../api/model/models';

export interface ActorSession {
  id: number; // sessionId
  beginTimestamp: Date;
  endTimestamp: Date;
  jsessionid?: any;
  actor: models.Actor;
}