import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { CompetitionService } from './competition.service'; 


@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: './competition.html'
})

export class CompetitionComponent implements OnInit {

	public standingTable: any;

	constructor(private competitionService : CompetitionService) { }


	
	competitionDetail(id: number) {
		this.competitionService.getLeagueTable(id).subscribe(
			(result) => {
					if (result){
						this.standingTable = result.standing;
						console.log(this.standingTable);
					}
				},

			err => {
				
			},

			() => {}

		);

		console.log(this.standingTable);


		
	}

}