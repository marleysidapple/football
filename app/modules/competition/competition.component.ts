import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { ExplodePipe } from './../../pipes/explode.pipe';
import { Response } from '@angular/http';
import { CompetitionService } from './competition.service';
import { FixturesComponent } from './../fixtures/fixtures.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Teamlisting } from './teamlisting';

import { Observable } from 'rxjs/Observable';


@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './competition.html',
	providers: [ FixturesComponent ],
	//styleUrls:  ['competition.component.css']
})

export class CompetitionComponent {

	public standingTable: any;
	public fixtures: any;
	//public allTeams: any;
	public myurl: any;

	 // Local properties
    allTeams: Teamlisting[];
	

	constructor(private competitionService: CompetitionService, private _route : ActivatedRoute) { }

	ngOnInit(): void {
		this._route.params.subscribe((params: Params) => {
			this.standingTable = this.competitionDetail(params['id']);
			this.fixtureDetail(params['id']);
			this.teamDetail(params['id']);
		});
		
	}



	competitionDetail(id: number) {
		this.competitionService.getLeagueTable(id).subscribe(
			(result) => {
				if (result) {
					this.standingTable = result;
				}
			},

			err => {

			},

			() => { }

		);

	}


	fixtureDetail(id: number){
		this.competitionService.getFixture(id).subscribe(
				(result) => {
					if (result) {
						this.fixtures = result;
					}
				},

				err => {

				},

				() => { }
			);
	}


	teamDetail(id: number){
		this.competitionService.getTeamListing(id).subscribe(
				(result) => {
					if (result){
						//console.log(result.teams);
						this.allTeams = result; 
					}
				}, 

				err => {

				}, 

				() => { }
			);
	}

}