import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiService } from 'app/common/service/api/api.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    RouterLinks: String[];

    constructor(private router: Router, private http: ApiService) {
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

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('-------------AuthGuard  canActivate : ', route.url[0].path);
        console.log('-------------AuthGuard  canActivate : ', state.url);
        if (!this.isSessionCheck() && !this.isUrlInAuthCheck(state.url)) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }

        return this.isSessionCheck();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard  canActivateChild : ', this.router.url);
        if (!this.isSessionCheck()) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        return this.isSessionCheck();
    }

    isSessionCheck(): boolean { //超时验证
        let result: boolean = false;
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            let user = JSON.parse(localStorage.getItem('currentUser'));
            let loginTime = user.loginTime;
            let t = Date.now() - +(new Date(loginTime));
            let aliveTime = environment.aliveTime;
            // 5sec
            /*             if (t >= aliveTime * 1000) {
                            localStorage.removeItem('currentUser');
                        } else {
                            // loginTime update
                            user.loginTime = Date.now();
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            result = true;
                        } */
            user.loginTime = Date.now();
            localStorage.setItem('currentUser', JSON.stringify(user));
            result = true;
        }
        return result;
    }

    isUrlInAuthCheck(url) {
        let result: boolean = false;
        if (localStorage.getItem('currentUser')) {
            for (let i = 0; i < this.RouterLinks.length; i++) {
                debugger;
                if (url == '/boe/' + this.RouterLinks[i]) {
                    debugger;
                    result = true;
                    break;
                }
            }
        }
        return result;
    }
}