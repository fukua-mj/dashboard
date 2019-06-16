import { Language } from './../../../app/common/model/language';
import { ApiService } from './../../../app/common/service/api/api.service';
import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem, ScrollPanel } from 'primeng/primeng';
import { AppComponent } from 'app/app.component';

import { HttpClient } from '@angular/common/http';
// import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.css']
})
export class AppMenuComponent implements OnInit, AfterViewInit {

    @Input() reset: boolean;

    menuList: any[];

    menuModeList: any;

    themeList: any;

    respText;

    language: Language = new Language();


    @ViewChild('scrollPanel') layoutMenuScrollerViewChild: ScrollPanel;

    constructor(public app: AppComponent, public http: HttpClient, private service: ApiService
                //,public tService: TabService
            ) { }

    ngAfterViewInit() {
        setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    }

    ngOnInit() {
        this.language.lang_local = 'zh';
        this.service.post('/menu/getMenuList', this.language).subscribe(
            (res) => {
                this.respText = res;
                this.menuList = this.respText.menuList;
            },
            (error) => {
                this.logout();
            }
        );
    }

/*    ngOnInit() {
        this.http.get('assets/menu/menu.json').subscribe(
            (data) => {
                this.menuList = data['items'];
            }
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

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
    }

    changeLayout(theme) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
        	<li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass">
        		<a [href]="child.url||'#'" (click)="itemClick($event,child,i)" *ngIf="!child.routerLink" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target" (mouseenter)="onMouseEnter(i)" class="ripplelink">
        			<i class="material-icons">{{child.icon}}</i>
        			<span class="menuitem-text">{{child.label}}</span>
        			<i class="material-icons layout-submenu-toggler" *ngIf="child.items">keyboard_arrow_down</i>
        			<span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
        		</a>
        		<a (click)="itemClick($event,child,i)" *ngIf="child.routerLink" [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink" [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target" (mouseenter)="onMouseEnter(i)" class="ripplelink">
        			<i class="material-icons">{{child.icon}}</i>
        			<span class="menuitem-text">{{child.label}}</span>
        			<i class="material-icons layout-submenu-toggler" *ngIf="child.items">>keyboard_arrow_down</i>
        			<span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
        		</a>
        		<ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [@children]="(app.isHorizontal())&&root ? isActive(i) ?                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
        	</li>
        </ng-template>`,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                height: '*',
                'z-index': 100
            })),
            state('hidden', style({
                height: '0px',
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    activeIndex: number;

    constructor(public app: AppComponent, public router: Router, public location: Location, public appMenu: AppMenuComponent) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
            event.preventDefault();
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex as number === index) ? -1 : index;
        }

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.appMenu.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isMobile()) {
                this.app.sidebarActive = false;
                this.app.mobileMenuActive = false;
            }

            if (this.app.isHorizontal()) {
                this.app.resetMenu = true;
            } else {
                this.app.resetMenu = false;
            }

            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && this.app.isHorizontal()
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isOverlay())) {
            this.activeIndex = null;
        }
    }
}
