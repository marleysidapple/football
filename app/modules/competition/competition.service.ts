import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Teamlisting } from './teamlisting';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';



@Injectable()

export class CompetitionService {

	private url: string = 'http://api.football-data.org/v1';
	private allTeams: Teamlisting;
	private observable: Observable<any>;

	constructor(private _http: Http) { }

	createAuthorizationHeader(headers: Headers) {
	    headers.append('X-Auth-Token' , '932e2b26e9cc4e789141aec6d2eef0a1');
	    headers.append('X-Response-Control', 'full');
	  }


	getLeagueTable(id: number) {
		// let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		// headers.append('X-Response-Control', 'full');
		// let options = new RequestOptions({ headers: headers });
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url + '/competitions/' + id + '/leagueTable', options)
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	getFixture(id: number) {
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/competitions/' + id + '/fixtures?timeFrame=n20', options)
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	/*
	getTeamListing(id: number): Observable<Teamlisting[]> {
		 console.log('team called');
		 console.log(this.allTeams);
		if (this.allTeams) {
			 console.log('data available');
			 //return Observable.of(this.allTeams);
			//return Observable.of(this.allTeams);
		} else {
			let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
			headers.append('X-Response-Control', 'full');

			let options = new RequestOptions({ headers: headers });

			return this._http.get(this.url + '/competitions/' + id + '/teams', options)
				.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
				.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
		}
	}
	*/

	getTeamListing(id: number) {
		console.log('team called');
		if (this.allTeams) {
			console.log('data available');
			return Observable.of(this.allTeams);
		} else {
			console.log('send new request');
			// let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
			// headers.append('X-Response-Control', 'full');
			let headers = new Headers();
    		this.createAuthorizationHeader(headers);
			this.observable = this._http.get(this.url + '/competitions/' + id + '/teams', {
				headers: headers
			}).map((res: Response) => {
				this.observable = null;
				this.allTeams = res.json();
				return this.allTeams;

			}).catch((error: any) => {
				return Observable.throw(error.json().error || 'Server Error');
			}).share();

			return this.observable;
		}
	}

	getTeamDetail(id: number) {
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/teams/' + id, options)
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

}