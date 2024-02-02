import { Component } from '@angular/core';
import { TeamsServiceService } from '../teams-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private teamSrv : TeamsServiceService, private router : Router) {}
  
  onShowFootballTeamClick = () => {
    this.teamSrv.showFootballTeam.emit(true);
  }

  onHideFootballTeamClick = () => {
    this.teamSrv.showFootballTeam.emit(false);
  }

  onFilter = (event : Event) => {
    const input = event.target as HTMLInputElement;
    this.teamSrv.inputEmitter.emit(input.value)
  }
  
}
