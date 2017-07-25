import { ServersService } from './servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersRoutingComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
