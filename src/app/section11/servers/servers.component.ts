import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersRoutingComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor (
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route});
    this.router.navigate(['section11/servers']);
  }

}
