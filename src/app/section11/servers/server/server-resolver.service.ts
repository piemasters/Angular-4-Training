import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

constructor(private serversService: ServersService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}
