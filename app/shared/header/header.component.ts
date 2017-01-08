import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Response } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './header.html'
})


export class HeaderComponent { 


	public isOpen: boolean = false;


	ngOnInit(){
		 this.competitionList();
	}

	constructor(private headerService: HeaderService) { }

	showallcompeition(){
		if (this.isOpen === false){
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

	competitionList(){
		this.headerService.getAllCompetition().subscribe(
			(result) => {
					if (result){
						//console.log(JSON.stringify(result.token));
						console.log(result);
					}
				},

			err => {
				
			},

			() => {}

		);
	}

}