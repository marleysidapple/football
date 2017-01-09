import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Router, RouterModule } from '@angular/router';
import { Response } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './header.html'
})


export class HeaderComponent { 


	public isOpen: boolean = false;
	public competition: Object;


	ngOnInit(){
		 this.competitionList();
	}

	constructor(private headerService: HeaderService, public _router: Router) { }

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
						this.competition = result;
					}
				},

			err => {
				
			},

			() => {}

		);
	}


	getCompetitionDetail(id: any){
		this._router.navigate(["/competition/detail/"+id]);
		
	}

}