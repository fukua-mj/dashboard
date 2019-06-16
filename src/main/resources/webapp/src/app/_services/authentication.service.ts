import { ApiService } from './../common/service/api/api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private service: ApiService) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                console.log('/api/authenticate result user : ', user);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('currentIP', user.logInIP);
                    localStorage.setItem('currentUserName',user.username);
                }

                return user;
            });
    }

/*     login(username: string, password: string) {
        this.service.post('/authenticate', '' , { username: username, password: password }).subscribe(
            (res) => {
               const user: any = res;
               if (user && user.checkState === 1) {
                    if (user && user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }
               } else {
                    window.location.href = '/';
               }
               return user;
            },
            (error) => { console.log(error); }
          );
    } */

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.service.post('/logout', '').subscribe(
            (res) => {
               console.log(res);

            },
            (error) => { console.log(error); }
        );
        window.location.href = '/';
    }
}
