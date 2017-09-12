import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/



@Injectable()
export class RemoteServiceProvider {

  getApiUrl : string = "https://feeds.citibikenyc.com/stations/stations.json?12fca0b0-82a4-4e17-9faa-40a5386a3d31";

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
getPosts() {

    return  this.http.get(this.getApiUrl)
            .do((res : Response ) => console.log(res.json()))
            .map((res : Response ) => res.json());
}
}
