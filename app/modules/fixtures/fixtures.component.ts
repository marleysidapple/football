import { Component, Input } from '@angular/core';
import { CompetitionService } from './../competition/competition.service';

@Component({
	selector: 'my-fixture',
	moduleId: module.id,
	templateUrl: './fixtures.component.html'
})


export class FixturesComponent { 

 @Input() hometeam:any;
 @Input() awayteam:any;
 @Input() hometeamId: any;
 @Input() awayteamId: any;
 @Input() timed: any;


 public homeTeamImage : any;
 public awayTeamImage : any;



 constructor(private competitionService: CompetitionService) { }


 ngOnInit(){
 	this.homeTeamImage = this.homeTeamDetail(this.hometeamId);
 	this.awayTeamImage = this.awayTeamDetail(this.awayteamId);
 }



 homeTeamDetail(id: number){
 	this.competitionService.getTeamDetail(id).subscribe(
				(result) => {
					if (result){
						this.homeTeamImage = result.crestUrl;
						//this.homeTeamImage = result; 
					}
				}, 

				err => {

				}, 

				() => { }
			);
 }

 awayTeamDetail(id : number){
 	this.competitionService.getTeamDetail(id).subscribe(
				(result) => {
					if (result){
						this.awayTeamImage = result.crestUrl;
						//this.homeTeamImage = result; 
					}
				}, 

				err => {

				}, 

				() => { }
			);
 }
 

  


}