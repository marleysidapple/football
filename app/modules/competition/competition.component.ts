import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { CompetitionService } from './competition.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './competition.html',
	styleUrls:  ['competition.component.css']
})

export class CompetitionComponent {

	public standingTable: any;
	public fixtures: any;
	

	constructor(private competitionService: CompetitionService, private _route : ActivatedRoute) { }

	ngOnInit(): void {
		this._route.params.subscribe((params: Params) => {
			this.standingTable = this.competitionDetail(params['id']);
			this.fixtureDetail(params['id']);
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


	teamDetail(url: string){
		this.competitionService.getTeamDetail(url).subscribe(
				(result) => {
					if (result){
						//console.log(result);
					}
				}, 

				err => {

				}, 

				() => { }
			);
	}

}