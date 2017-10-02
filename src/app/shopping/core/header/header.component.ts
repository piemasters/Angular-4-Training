import {AuthenticateService} from '../../auth/auth.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {DataStorageService} from '../../shared/data-storage.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, public authService: AuthenticateService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
      // (response: HttpEvent<Object>) => {
      //   console.log(response.type === HttpEventType.Sent);
      // }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
