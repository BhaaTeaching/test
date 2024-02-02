import { Component } from '@angular/core';
import { TeamsServiceService } from '../teams-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  showTeam = false;
  footballTeams = [
    "Real Madrid",
    "FC Barcelona",
    "Manchester United",
    "Liverpool FC",
    "Bayern Munich",
    "Paris Saint-Germain",
    "Juventus",
    "AC Milan",
    "Chelsea FC",
    "Arsenal FC",
    "Borussia Dortmund",
    "Ajax",
    "Inter Milan",
    "Manchester City",
    "Atletico Madrid",
    "Tottenham Hotspur",
    "Roma",
    "Napoli",
    "FC Porto",
    "Boca Juniors",
    "River Plate",
    "Flamengo",
    "Sao Paulo FC",
    "Ajax",
    "PSV Eindhoven",
    "Feyenoord",
    "Benfica",
    "Sporting CP",
    "Galatasaray",
    "Fenerbahce",
    "Celtic"
  ];

  pathParam : string = ''
constructor(public teamSrv : TeamsServiceService) {
  this.teamSrv.showFootballTeam.subscribe(bool =>  {
    this.showTeam = bool;
  })

  this.teamSrv.inputEmitter.subscribe(input => {
    this.footballTeams = this.footballTeams.filter(
      (team) => team.toLowerCase().includes(input)
    );
  })
 
}

}
