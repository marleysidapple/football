import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-fixture',
	moduleId: module.id,
	templateUrl: './fixtures.component.html'
})


export class FixturesComponent { 

 @Input() hometeam:any;
 @Input() awayteam:any;

}