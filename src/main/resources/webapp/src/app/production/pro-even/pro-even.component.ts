import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { YieldParam } from './../common/model/yieldParam';
import { ApiService } from './../../common/service/api/api.service';
import { ProductionChartOptionService } from './../common/production-chart-option.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';
import * as screenfull from 'screenfull';
import { InoutComponent } from '../pro-mdl/inout/inout.component';
import { ActplanComponent } from '../pro-mdl/actplan/actplan.component';
import { WipmovementComponent } from '../pro-mdl/wipmovement/wipmovement.component';
import { Message } from 'primeng/api';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
    selector: 'app-pro-even',
    templateUrl: './pro-even.component.html',
    styleUrls: ['./pro-even.component.css']
})
export class ProEvenComponent implements OnInit {

    @ViewChild('Child_InputOutput')
    Child_InputOutput: InoutComponent;

    @ViewChild('Child_ActPlan')
    Child_ActPlan: ActplanComponent;

    @ViewChild('Child_WipMove')
    Child_WipMove: WipmovementComponent;

    display: boolean[];

    index;

    currentUserName = localStorage.getItem('currentUserName');

    deviceType = localStorage.getItem('deviceType');

    shopName = 'EVEN';

    msgs: Message[] = [];
    constructor(private httpService: ApiService, private location: PlatformLocation,private stringMethod:StringMethodService,
        private breadcrumbService: BreadcrumbService, public tService: TabService, private EchartService: ProductionChartOptionService) {
        this.breadcrumbService.setItems([
            { label: 'Production' },
            { label: 'EVEN' },
        ]);

        this.tService.setItems('Production-EVEN');
    }

    ngOnInit() {
        this.display = [true, true, true];

        let locationUrl = '';
        for (const i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'),locationUrl));
    }

    onTabChange(event) {
        switch (event.index) {
            case 0:
                //this.showMessage('success', 'success message', '投入产出页面打开');
                this.Child_InputOutput.task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
            case 1:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
            case 2:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.task_ProductionWIPMove();
                break;
            case 3:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
        }
    }

    showMessage(severity: string, summary: string, detail: string) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    }
}
