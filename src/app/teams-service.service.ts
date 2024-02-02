import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  constructor() { }

  showFootballTeam : EventEmitter<boolean> = new EventEmitter();
  inputEmitter : EventEmitter<string> = new EventEmitter();

}
