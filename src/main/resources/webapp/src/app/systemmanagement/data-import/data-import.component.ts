import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
    selector: 'app-data-import',
    templateUrl: './data-import.component.html',
    styleUrls: ['./data-import.component.css']
})
export class DataImportComponent implements OnInit {

    display: boolean[];

    config: any[];

    constructor(private http: ApiService) { }

    ngOnInit() {
        //this.display = [true, true, true, true];
        this.getUsableTabView();
        this.config = [
            {
                tableName: 'Killing',
                cols: [
                    /*                     { field: 'id', header: 'ID' }, */
                    { field: 'factoryyear', header: '年份' },
                    { field: 'factorymonth', header: '月份' },
                    { field: 'factoryname', header: '工厂' },
                    { field: 'productcategory', header: '产品类型' },
                    { field: 'productiontype', header: '产品阶段' },
                    { field: 'defectcode', header: 'Defect Code' },
                    { field: 'pnlKilling', header: 'Killing值' },
                    { field: 'updatetime', header: '更新时间' },
                    { field: 'updateuser', header: '更新用户' },
                    /*                     { field: 'reserved1', header: 'reserved1' },
                                        { field: 'reserved2', header: 'reserved2' } */
                ],
                uploadUrl: 'api/file/excel/upload/killing',
                gridUrl: '/killing/getKillingList',
                searchItem: [
                    'factoryyear',
                    'factoryname',
                    'productcategory'
                ]
            },
            {
                tableName: 'CG',
                cols: [
                    { field: 'factoryname', header: '工厂' },
                    { field: 'productcategory', header: '产品类型' },
                    { field: 'category', header: '类别' },
                    { field: 'inOut', header: 'In/Out' },
                    { field: 'day01', header: 'Day01' },
                    { field: 'day02', header: 'Day02' },
                    { field: 'day03', header: 'Day03' },
                    { field: 'day04', header: 'Day04' },
                    { field: 'day05', header: 'Day05' },
                    { field: 'day06', header: 'Day06' },
                    { field: 'day07', header: 'Day07' },
                    { field: 'day08', header: 'Day08' },
                    { field: 'day09', header: 'Day09' },
                    { field: 'day10', header: 'Day10' },
                    { field: 'day11', header: 'Day11' },
                    { field: 'day12', header: 'Day12' },
                    { field: 'day13', header: 'Day13' },
                    { field: 'day14', header: 'Day14' },
                    { field: 'day15', header: 'Day15' },
                    { field: 'day16', header: 'Day16' },
                    { field: 'day17', header: 'Day17' },
                    { field: 'day18', header: 'Day18' },
                    { field: 'day19', header: 'Day19' },
                    { field: 'day20', header: 'Day20' },
                    { field: 'day21', header: 'Day21' },
                    { field: 'day22', header: 'Day22' },
                    { field: 'day23', header: 'Day23' },
                    { field: 'day24', header: 'Day24' },
                    { field: 'day25', header: 'Day25' },
                    { field: 'day26', header: 'Day26' },
                    { field: 'day27', header: 'Day27' },
                    { field: 'day28', header: 'Day28' },
                    { field: 'day29', header: 'Day29' },
                    { field: 'day30', header: 'Day30' },
                    { field: 'day31', header: 'Day31' },
                ],
                uploadUrl: 'api/file/excel/upload/cg',
                gridUrl: '/cg/getCGPlanList',
                searchItem: [
                    'factoryyear',
                    'factoryname',
                    'productcategory'
                ]
            },
            {
                tableName: 'OperatorTarget',
                cols: [
                    { field: 'factoryname', header: '工厂' },
                    { field: 'operatorid', header: '工号' },
                    { field: 'targetTotal', header: 'Total' },
                    { field: 'target00h', header: '00H' },
                    { field: 'target01h', header: '01H' },
                    { field: 'target02h', header: '02H' },
                    { field: 'target03h', header: '03H' },
                    { field: 'target04h', header: '04H' },
                    { field: 'target05h', header: '05H' },
                    { field: 'target06h', header: '06H' },
                    { field: 'target07h', header: '07H' },
                    { field: 'target08h', header: '08H' },
                    { field: 'target09h', header: '09H' },
                    { field: 'target10h', header: '10H' },
                    { field: 'target11h', header: '11H' },
                    { field: 'target12h', header: '12H' },
                    { field: 'target13h', header: '13H' },
                    { field: 'target14h', header: '14H' },
                    { field: 'target15h', header: '15H' },
                    { field: 'target16h', header: '16H' },
                    { field: 'target17h', header: '17H' },
                    { field: 'target18h', header: '18H' },
                    { field: 'target19h', header: '19H' },
                    { field: 'target20h', header: '20H' },
                    { field: 'target21h', header: '21H' },
                    { field: 'target22h', header: '22H' },
                    { field: 'target23h', header: '23H' },
                    { field: 'lastupdatetime', header: '更新时间' },
                ],
                uploadUrl: 'api/file/excel/upload/operatortarget',
                gridUrl: '/operatortarget/getOperatorTargetList',
                searchItem: [
                    'factoryyear',
                    'factoryname',
                    'productcategory'
                ]
            },
            {
                tableName: 'OperatorInfo',
                cols: [
                    { field: 'factoryname', header: '工厂' },
                    { field: 'processoperationname', header: '工序' },
                    { field: 'shiftname', header: '班别' },
                    { field: 'groupname', header: '组别' },
                    { field: 'operatorid', header: '工号' },
                    { field: 'operatorname', header: '姓名' },
                    { field: 'lastupdatetime', header: '更新时间' },
                ],
                uploadUrl: 'api/file/excel/upload/operatorinfo',
                gridUrl: '/operatorinfo/getOperatorInfoList',
                searchItem: [
                    'factoryyear',
                    'factoryname',
                    'productcategory'
                ]
            },
        ];

    }

    getUsableTabView() {
        const options = {
            params: {
                userAccount: localStorage.getItem('currentUserName'),
                menuName: 'SystemManagement_DataImport'
            }
        };
        this.http.get('/roletabviewlink/select/usableTabView', options).subscribe(
            (res) => {
                this.display = <boolean[]>res;
            },
            (error) => { console.log(error); }
        );
    }


}
