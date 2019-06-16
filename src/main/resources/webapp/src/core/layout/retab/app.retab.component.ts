import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TabItem } from './tabItem';
import { TabService } from './service/tab.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { MenuItem } from 'primeng/api';
import { AppComponent } from 'app/app.component';
import { environment } from '../../../environments/environment';
@Component({
    selector: 'retab',
    templateUrl: './app.retab.component.html',
    styleUrls: ['./app.retab.component.css'],

})
export class AppRetabComponent implements OnInit {
    spItems: MenuItem[];
    items: TabItem[] = new Array();
    subscription: Subscription;
    tabLayout: boolean = false;
    //items2 : MenuItem[];

    tabCount: number;

    deviceType: string = localStorage.getItem('deviceType');

    constructor(public tService: TabService, private router: Router, private breadcrumbService: BreadcrumbService,
        private cdr: ChangeDetectorRef, public app: AppComponent, ) {

        if (this.deviceType == 'tv') {
            this.tabCount = 10;
        } else {
            this.tabCount = 7;
        }

        // this.tabLayout =  environment.tabLayout;
        this.tabLayout = !app.isMobile();
        // console.log(this.tabLayout);
        if (this.tabLayout) {
            this.subscription = tService.itemsHandler.subscribe(response => {
                //console.log('response : {} ',response);
                this.items = response;
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].selected) {
                        this.changeRouter(i);
                        break;
                    }
                }
                if (this.items.length > this.tabCount) {
                    for (let i = 0; i < this.items.length - this.tabCount; i++) {
                        this.items[i].displayed = false;
                    }
                }

                setTimeout(() => {
                    this.reloadTooltip();
                }, 100);
                // this.cdr.detectChanges();
            });
        }
    }
    ngAfterViewInit() {
        this.reloadTooltip();

        // attr.value = 'test';
        // targetHTML.setAttributeNode(attr);
    }
    reloadTooltip() {

        let targetHTML = document.getElementsByClassName('ui-corner-top');
        //let targetHTML =document.getElementsByTagName('li');
        let classretabHTML = document.getElementById('classretab');

        //console.log(targetHTML);
        //console.log('classretabHTML : ',classretabHTML);
        if (classretabHTML != null) {
            let retabAHtml = classretabHTML.getElementsByTagName('a');
            //console.log('retabAHtml : ',retabAHtml);
            if (retabAHtml != null) {
                let tabCnt: number = 0;
                for (let i = 0; i < retabAHtml.length; i++) {
                    let role = retabAHtml[i].getAttribute('role');
                    if (role != null && this.items[tabCnt] != null) {
                        let attr = document.createAttribute('data-tooltip');
                        attr.value = this.items[tabCnt].orgLabel;
                        retabAHtml[i].setAttributeNode(attr);
                        tabCnt++;
                    }
                    // let targetHTML_li = targetHTML[i].children[0];
                    // let role = targetHTML_li.getAttribute('role');
                    // if(role != null && this.items[tabCnt] !=null) {
                    //  let attr = document.createAttribute('data-tooltip');
                    //  attr.value = this.items[tabCnt].orgLabel;
                    //  targetHTML_li.setAttributeNode(attr);
                    //  tabCnt++;
                    // }
                }
            }
        }
    }
    ngOnInit() {
        this.spItems = [

            {
                label: 'Close Selected',
                icon: 'fa fa-times',
                command: (event) => { this.closeTabItem('select') }
            },
            { separator: true },
            {
                label: 'Close Other',
                icon: 'fa fa-check-square-o',
                command: (event) => { this.closeTabItem('other') }
            }
            // ,
            // {separator:true},
            // {
            //     label: 'Close All',
            //     icon: 'fa fa-trash-o',
            //     command: (event) => { this.closeTabItem('all') }
            // }
        ];


    }
    getPaddingTop() {
        if (this.app.isHorizontal()) {
            return '110px';
        } else {
            return '48px';
        }

    }
    getPaddingTopClear() {
        if (this.app.isHorizontal()) {
            return '110px';
        } else {
            return '48px';
        }

    }
    closeTabItem(delType: string) {
        //console.log('delType: ',delType);
        if (delType === 'select') {
            this.tService.deleteItem(this.findSelectTab());
        } else if (delType === 'other') {
            this.tService.deleteItemOther(this.findSelectTab());
        } else {
            this.tService.deleteItemAll();
        }
    }
    findSelectTab() {
        let selectedIndex;
        for (let i = 0; i < this.items.length; i++) {
            let _tmpItem: TabItem = this.items[i];
            if (_tmpItem.selected) {
                selectedIndex = i;
                break;
            }
        }
        return selectedIndex;
    }
    handleClose(event) {
        //console.log('close tab event {} ',event.index);
        let _index = event.index;
        this.tService.deleteItem(_index);
    }
    handleChange(event) {
        //console.log('handleChange tab event {} ',event);
        this.changeRouter(event.index);
    }
    changeRouter(index) {
        let _item: TabItem = this.items[index];
        this.router.navigateByUrl(_item.url);
        this.breadcrumbService.setItems(_item.breadcrumb);
        this.reloadTooltip();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    leftClick() {
        debugger;
        let startIndex;
        let endIndex;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].displayed == true) {
                startIndex = i;
                break;
            }
        }
        for (let i = startIndex; i < this.items.length; i++) {
            if (this.items[i].displayed == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex == undefined || endIndex == null) {
            endIndex = this.items.length - 1;
        }
        if (endIndex - startIndex + 1 > this.tabCount) {
            for (let i = 0; i < startIndex + 1; i++) {
                this.items[i].displayed = false;
            }
            for (let i = startIndex + 1; i < endIndex + 2; i++) {
                this.items[i].displayed = true;
            }
            for (let i = endIndex + 2; i < this.items.length; i++) {
                this.items[i].displayed = false;
            }
        }

    }

    rightClick() {
        debugger;
        let startIndex;
        let endIndex;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].displayed == true) {
                startIndex = i;
                break;
            }
        }
        for (let i = startIndex; i < this.items.length; i++) {
            if (this.items[i].displayed == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex == undefined || endIndex == null) {
            endIndex = this.items.length - 1;
        }

        let falseStart;
        if (startIndex - 1 < 0) {
            falseStart = 0;
        } else {
            falseStart = startIndex - 1;
        }
        if (endIndex - falseStart > this.tabCount) {
            for (let i = 0; i < falseStart; i++) {
                this.items[i].displayed = false;
            }

            for (let i = falseStart; i < endIndex; i++) {
                this.items[i].displayed = true;
            }
            for (let i = endIndex; i < this.items.length; i++) {
                this.items[i].displayed = false;
            }
        }
    }

}


