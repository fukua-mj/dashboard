import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix">
        	<a href="/">
        		<img alt="logo-colored" src="assets/layout/images/logo-blue.png" />
            </a>
            <span class="footer-text-right" style="font-size:1px">
                <!--<span class="material-icons">copyright</span>
                2018 - {{this_year}}-->
                <span>Copyright 2016 - {{this_year}} BOE B7 CIM All Rights Reserved</span>
            </span>
        </div>`
})
export class AppFooterComponent {
    readonly this_year;

    constructor() {
        this.this_year = new Date().getFullYear();
    }

}
