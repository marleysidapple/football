import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { CompetitionService } from './competition.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './competition.html',
	styles: ['table { font-size: 12px; }']
})

export class CompetitionComponent {

	public standingTable: any;

	constructor(private competitionService: CompetitionService, private _route : ActivatedRoute) { }

	ngOnInit(): void {
		this._route.params.subscribe((params: Params) => {
			this.standingTable = this.competitionDetail(params['id']);
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

}