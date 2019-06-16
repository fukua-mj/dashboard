import { TabService } from './../../../core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { RoleMenuLink } from './../../common/model/system/rolemenulink';
import { UserRoleLink } from './../../common/model/system/userrolelink';
import { Message } from 'primeng/api';
import { RoleInfo } from './../../common/model/system/roleinfo';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';
import { Userinfo } from '../../common/model/system/userinfo';
import { MenuInfo } from '../../common/model/system/menuinfo';

@Component({
    selector: 'app-authority',
    templateUrl: './authority.component.html',
    styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {

    roleInfoList: RoleInfo[];

    disabled_Commit: boolean = false;

    selectedRole: RoleInfo = new RoleInfo();

    cols: any[];

    searchRole: RoleInfo = new RoleInfo();

    addedRole: RoleInfo = new RoleInfo();

    display_add = false;

    display_modify = false;

    display_update = false;

    display_delete = false;

    display_UserRoleLink = false;

    display_RoleMenuLink = false;

    selectedUser: Userinfo = new Userinfo();

    fromusers: Userinfo[];

    tousers: Userinfo[];

    msgs: Message[] = [];

    frommenus: MenuInfo[];

    tomenus: MenuInfo[];

    menuSort: string;

    display_MenuSort = false;

    roleMenuLink_TargetSelect: RoleMenuLink;

    constructor(private service: ApiService, private breadcrumbService: BreadcrumbService,
        public tService: TabService) {
        this.breadcrumbService.setItems([
            { label: 'System' },
            { label: 'Authority' },
        ]);
        this.tService.setItems('System-Authority');
    }

    ngOnInit() {
        this.cols = [
            { field: 'rolename', header: '角色名称' },
            { field: 'description', header: '角色备注' },
/*             { field: 'setting', header: '菜单设置' }, */
        ];
        this.getAllRoleInfoData();
    }

    getAllRoleInfoData() {
        this.service.getAll('/role/selectAll/roleInfo').subscribe(
            (res) => {
                console.log(res);
                this.roleInfoList = <RoleInfo[]>res;
            },
            (error) => { console.log(error); }
        );
    }

    showAddRoleDialog() {
        this.addedRole.rolename = null;
        this.addedRole.description = null;
        this.display_add = true;
    }

    showUpdateRoleDialog() {
        if (this.selectedRole.rolename != null) {
            this.display_modify = true;
            this.display_update = true;
            this.display_delete = false;
        }
    }

    showDeleteRoleDialog() {
        if (this.selectedRole.rolename != null) {
            this.display_delete = true;
            this.display_update = false;
            this.display_modify = true;
        }
    }

    showUserRoleLinkDialog() {
        if (this.selectedRole.rolename != null) {
            this.display_UserRoleLink = true;
            const options = {
                params: { roleName: this.selectedRole.rolename }
            };
            console.log(options);
            this.service.get('/user/selectAll/userInfoWithOutExist', options).subscribe(
                (res) => {
                    this.fromusers = <Userinfo[]>res;
                },
                (error) => { console.log(error); }
            );
            this.service.get('/user/select/userInfo', options).subscribe(
                (res) => {
                    this.tousers = <Userinfo[]>res;
                },
                (error) => { console.log(error); }
            );
        }
    }

    showRoleMenuLinkDialog() {
        if (this.selectedRole.rolename != null) {
            this.display_RoleMenuLink = true;
            const options = {
                params: { roleName: this.selectedRole.rolename }
            };
            console.log(options);
            this.service.get('/menu/selectAll/menuInfoWithOutExist', options).subscribe(
                (res) => {
                    this.frommenus = <MenuInfo[]>res;
                },
                (error) => { console.log(error); }
            );
            this.service.get('/menu/select/menuInfo', options).subscribe(
                (res) => {
                    this.tomenus = <MenuInfo[]>res;
                },
                (error) => { console.log(error); }
            );
        }
    }

    addRole() {
        this.service.post('/role/insert/roleInfo', this.addedRole).subscribe(
            (res) => {
                console.log(res);
                this.getAllRoleInfoData();
                this.display_add = false;
            },
            (error) => { console.log(error); }
        );
    }

    deleteRole() {
        console.log('delete');
        this.service.put('/role/delete/roleInfo', this.selectedRole).subscribe(
            (res) => {
                console.log(res);
                this.getAllRoleInfoData();
                this.display_modify = false;
                this.display_delete = false;
            },
            (error) => { console.log(error); }
        );
    }

    updateRole() {
        this.service.put('/role/update/roleInfo', this.selectedRole).subscribe(
            (res) => {
                console.log(res);
                this.getAllRoleInfoData();
                this.display_modify = false;
                this.display_update = false;
            },
            (error) => { console.log(error); }
        );
    }

    onRowSelect(event) {
        console.log(event.data);
        this.selectedRole = event.data;
    }

    onMoveToUserSource(event) {
        console.log(this.tousers);
    }

    addUserRoleLink() {
        const userRoleLink: UserRoleLink[] = [];
        for (let i = 0; i < this.tousers.length; i++) {
            userRoleLink[i] = new UserRoleLink();
            userRoleLink[i].rolename = this.selectedRole.rolename;
            userRoleLink[i].useraccount = this.tousers[i].useraccount;
        }
        this.service.post('/userRoleLink/insert/userRoleLinks', userRoleLink).subscribe(
            (res) => {
                this.showMessage('success', 'success message', '666');
                this.display_UserRoleLink = false;
            },
            (error) => { console.log(error); }
        );

    }

    showMessage(severity: string, summary: string, detail: string) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    }

    Test() {
        const testArr: string[] = ['1', '2', '3'];
        const user: UserRoleLink[] = [];
        for (let i = 0; i < 3; i++) {
            user[i] = new UserRoleLink();
            user[i].useraccount = testArr[i];
            user[i].rolename = testArr[i];
        }
        for (let i = 0; i < 3; i++) {
            console.log(user[i].useraccount);
        }
    }

    addRoleMenuLink() {
        this.disabled_Commit = true;
        const roleMenuLink: RoleMenuLink[] = [];
        for (let i = 0; i < this.tomenus.length; i++) {
            roleMenuLink[i] = new RoleMenuLink();
            roleMenuLink[i].rolename = this.selectedRole.rolename;
            roleMenuLink[i].menuname = this.tomenus[i].menuname;
        }
        this.service.post('/roleMenuLink/insert/roleMenuLinksByRole', roleMenuLink).subscribe(
            (res) => {
                this.showMessage('success', 'success message', '666');
                this.display_RoleMenuLink = false;
                this.disabled_Commit = false;
            },
            (error) => {
                console.log(error);
                this.disabled_Commit = false;
            }
        );
    }

    onTargetMenuSelect(event) {
        /*         const selectedMenuInfo: MenuInfo = event.items;
                this.roleMenuLink_TargetSelect = new RoleMenuLink();
                this.roleMenuLink_TargetSelect.rolename = this.selectedRole.rolename;
                this.roleMenuLink_TargetSelect.menuname = selectedMenuInfo.menuname; */
    }

    menuOrderSetting() {
        this.display_MenuSort = true;
    }

}
