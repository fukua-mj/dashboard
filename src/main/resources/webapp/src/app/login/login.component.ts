import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { AlertService,  } from '../_services/index';
import { AuthenticationService } from '../_services/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { RouterInterceptorService } from 'app/common/service/routerInterceptor.service';
// import {InputTextModule} from 'primeng/inputtext';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: [
        './login.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    languageList: any;
    selectLang: string = 'zh';

    submitError: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private translate: TranslateService,
        //private alertService: AlertService
    ) {
        this.selectLang = window.localStorage.getItem('language') || 'zh';
        translate.setDefaultLang('en');
        translate.use(this.selectLang);
    }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.languageList = [
            { label: '中文（简体）', value: 'zh' },
            { label: 'English', value: 'en' }
        ];
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    if (data.checkState == 1) {
                        window.localStorage.setItem('language', this.selectLang);
                        this.router.navigate([this.returnUrl]);
                    } else {
                        this.loading = false;
                        this.submitError = true;
                    }

                },
                error => {
                    console.error(error);
                    this.loading = false;
                    this.submitError = true;
                });
        /*
                        window.localStorage.setItem('language', this.selectLang);
                        this.router.navigate([this.returnUrl]);
                        console.log(this.returnUrl); */
    }

    langChanged() {
        // console.log(this.selectLang);
        this.translate.use(this.selectLang);
    }
}
