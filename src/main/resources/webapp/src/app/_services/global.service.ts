import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
 
@Injectable()
export class GlobalService {
    constructor(
        private http: HttpClient
    ) { 
        if(environment.unifiedAuth){
            this.http.get(environment.apiPath+'/menuinfo/getMenuByuser/').subscribe(
                (res) => {
                  this.availableMenu = <string[]>res;
                //  console.log('登陆时加载当前用户有权限访问的菜单');
                },
                (error) => {
                  console.log(error);
                }
              )
        }
    }

    public availableMenu = [];

}