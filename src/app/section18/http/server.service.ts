import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'COntent-Type': 'application/json'});
        return this.http.post('https://udemy-ng-http-492f7.firebaseio.com/data.json', servers, { headers: headers });
    }
}
