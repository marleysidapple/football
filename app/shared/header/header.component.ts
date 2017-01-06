import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './header.html'
})


export class HeaderComponent { 


	public isOpen: boolean = false;

	showallcompeition(){
		if (this.isOpen === false){
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

}