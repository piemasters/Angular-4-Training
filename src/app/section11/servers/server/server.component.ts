import { ActivatedRoute, Data, Params, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
