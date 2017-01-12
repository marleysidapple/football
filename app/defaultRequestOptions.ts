import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
	  
	  constructor() {
	  	super();
	  	this.headers.append('X-Auth-Token', '932e2b26e9cc4e789141aec6d2eef0a1');
        this.headers.append('X-Response-Control', 'full');
	  }

}