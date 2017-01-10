import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()

export class CompetitionService {

	private url: string = 'http://api.football-data.org/v1';

	constructor(private _http: Http) { }


	getLeagueTable(id: number){
		let headers = new Headers({'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1'});  
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({headers: headers});

		return this._http.get(this.url + '/competitions/' +id+ '/leagueTable', options)
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}