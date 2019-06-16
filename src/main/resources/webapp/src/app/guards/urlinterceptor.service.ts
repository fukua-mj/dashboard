import { Injectable } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';

@Injectable()
export class UrlinterceptorService {

    RouterLinks: String[];

    constructor(private http: ApiService) {
        this.getUrlList();
    }

    getUrlList(): String[] {
        const options = {
            params: {
                userName: localStorage.getItem('currentUserName'),
            }
        };
        this.http.get('/menu/select/url', options).subscribe(
            (res) => {
                this.RouterLinks = <String[]>res
            },
            (error) => {
                console.log(error);
            }
        );
        return this.RouterLinks;
    }

}