import { ServersService } from '../servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-routing',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
