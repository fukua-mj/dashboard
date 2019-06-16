import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { CanActivate, Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouterInterceptorService implements CanActivate {

  RouterLinks: String[];

  constructor(private http: ApiService, public route: ActivatedRoute) {
    this.getUrlList();
  }

  getUrlList() {
    const options = {
      params: {
        userName: localStorage.getItem('currentUserName'),
      }
    };
    this.http.get('/menu/select/url', options).subscribe(
      (res) => {
        this.RouterLinks = <String[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  canActivate(): boolean {
    console.log('-----------' + this.route.routeConfig.path);
    return true;
  }

}
