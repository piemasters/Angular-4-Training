import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

}
