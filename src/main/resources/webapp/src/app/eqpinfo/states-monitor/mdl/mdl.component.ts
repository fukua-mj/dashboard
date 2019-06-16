import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { StatesmonitormdlComponent } from 'app/eqpinfo/common/chart/statesmonitormdl/statesmonitormdl.component';
import { StatesmonitorComponent } from 'app/eqpinfo/common/chart/statesmonitor/statesmonitor.component';

@Component({
    selector: 'app-mdl',
    templateUrl: './mdl.component.html',
    styleUrls: ['./../bp/bp.component.css']
})
export class MdlComponent implements OnInit {

    @ViewChild('OLB')
    OLB: StatesmonitormdlComponent;

    @ViewChild('BCH')
    BCH: StatesmonitormdlComponent;

    @ViewChild('ALAMI')
    ALAMI: StatesmonitormdlComponent;

    @ViewChild('SCP')
    SCP: StatesmonitormdlComponent;

    @ViewChild('OCA')
    OCA: StatesmonitormdlComponent;

    @ViewChild('ACU')
    ACU: StatesmonitormdlComponent;

    @ViewChild('TGP')
    TGP: StatesmonitormdlComponent;

    @ViewChild('BRP')
    BRP: StatesmonitormdlComponent;

    @ViewChild('ATP')
    ATP: StatesmonitormdlComponent;

    @ViewChild('ASSY')
    ASSY: StatesmonitormdlComponent;

    @ViewChild('UNPACKER')
    UNPACKER: StatesmonitorComponent;

    @ViewChild('PCK')
    PCK: StatesmonitorComponent;

    @ViewChild('TOTAL')
    TOTAL: StatesmonitorComponent;

    display: boolean[];

    index = 0;

    items: any[];

    items2: any[];

    items3: any[];

    display_Setting = false;

    currentUserName = localStorage.getItem('currentUserName');

    deviceType = localStorage.getItem('deviceType');

    shopName = 'MODULE';

    msgs: Message[] = [];

    processType: string[] = [];

    tabCount: number = 0;

    constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
        this.breadcrumbService.setItems([
            { label: '状态监控' },
            { label: 'MDL' },
        ]);

        this.tService.setItems('状态监控 MDL');
        if (this.deviceType == 'tv') {
            this.tabCount = 10;
        } else {
            this.tabCount = 7;
        }
    }

    ngOnInit() {
        this.display = [true, true, true, true, true, true, true, true, true, true];
        this.items = [
            { header: 'OLB', processType: 'OLB', display: true, shopName: 'MODULE' },
            { header: 'BCH', processType: 'BCH', display: true, shopName: 'MODULE' },
            { header: 'A Lami', processType: 'A_LAMI', display: true, shopName: 'MODULE' },
            { header: 'SCP', processType: 'SCP', display: true, shopName: 'MODULE' },
            { header: 'OCA', processType: 'OCA', display: true, shopName: 'MODULE' },
            { header: 'ACU', processType: 'ACU', display: true, shopName: 'MODULE' },
            { header: 'TGP', processType: 'TGP', display: true, shopName: 'MODULE' },
            { header: 'BRP', processType: 'BRP', display: true, shopName: 'MODULE' },
            { header: 'ATP', processType: 'ATP', display: true, shopName: 'MODULE' },
            { header: 'ASSY', processType: 'ASSY', display: true, shopName: 'MODULE' },
            { header: 'Unpacker', processType: 'MCU', display: true, shopName: 'MODULE' },
            { header: 'PCK', processType: 'PCK', display: true, shopName: 'MODULE' },
            { header: 'Total', processType: 'Total', display: true, shopName: 'MODULE' }
        ];
        /*         this.items2 = [
                    { header: 'Unpacker', processType: 'MCU', display: true, shopName: 'MODULE' },
                    { header: 'Auto Packing', processType: 'MAP', display: true, shopName: 'MODULE' },
                    { header: 'Box Packing', processType: 'MBP', display: true, shopName: 'MODULE' },
                    { header: 'Box Buffer', processType: 'MBB', display: true, shopName: 'MODULE' },
                    { header: 'Pallet', processType: 'MPP', display: true, shopName: 'MODULE' },
                    { header: 'Total', processType: 'Total', display: true, shopName: 'MODULE' }
                ];
                this.items3 = [
                    { header: 'Total', processType: 'Total', display: true, shopName: 'MODULE' }
                ] */
    }

    showTabSetting() {
        this.display_Setting = true;
    }

    onTabChange(event) {
        switch (event.index) {
            case 0:
                this.OLB.start_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 1:
                this.OLB.clear_Timer();
                this.BCH.start_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 2:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.start_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 3:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.start_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 4:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.start_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 5:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.start_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;

            case 6:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.start_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 7:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.start_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 8:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.start_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 9:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.start_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 10:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.start_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 11:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.start_Timer();
                this.TOTAL.clear_Timer();
                break;
            case 12:
                this.OLB.clear_Timer();
                this.BCH.clear_Timer();
                this.ALAMI.clear_Timer();
                this.SCP.clear_Timer();
                this.OCA.clear_Timer();
                this.ACU.clear_Timer();
                this.TGP.clear_Timer();
                this.BRP.clear_Timer();
                this.ATP.clear_Timer();
                this.ASSY.clear_Timer();
                this.UNPACKER.clear_Timer();
                this.PCK.clear_Timer();
                this.TOTAL.start_Timer();
                break;

            default:
                break;
        }
    }

    leftClick() {
        let startIndex;
        let endIndex;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].display == true) {
                startIndex = i;
                break;
            }
        }
        for (let i = startIndex; i < this.items.length; i++) {
            if (this.items[i].display == false) {
                endIndex = i - 1;
                break;
            }
        }
        debugger;
        if (endIndex - startIndex + 1 > this.tabCount) {
            for (let i = 0; i < startIndex + 1; i++) {
                this.items[i].display = false;
            }
            for (let i = startIndex + 1; i < endIndex + 2; i++) {
                this.items[i].display = true;
            }
            for (let i = endIndex + 2; i < this.items.length; i++) {
                this.items[i].display = false;
            }
        }

    }

    rightClick() {

        let startIndex;
        let endIndex;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].display == true) {
                startIndex = i;
                break;
            }
        }
        for (let i = startIndex; i < this.items.length; i++) {
            if (this.items[i].display == false) {
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
                this.items[i].display = false;
            }

            for (let i = falseStart; i < endIndex; i++) {
                this.items[i].display = true;
            }
            for (let i = endIndex; i < this.items.length; i++) {
                this.items[i].display = false;
            }
        }
    }

    tabDisplayOnChange(event) {
        if (event.checked == true) {
            let trueCount: number = 0;
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].display == true) {
                    trueCount++;
                }
            }
            if (trueCount > this.tabCount) {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].display == true) {
                        this.items[i].display = false;
                        break;
                    }
                }
            }
        }
    }

}
