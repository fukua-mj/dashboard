import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from './../../../core/layout/breadcrumb/service/breadcrumb.service';
import { Message } from 'primeng/api';
import { UserRoleLink } from './../../common/model/system/userrolelink';
import { RoleInfo } from './../../common/model/system/roleinfo';
import { Component, OnInit, Input } from '@angular/core';
import { Userinfo } from '../../common/model/system/userinfo';
import { ApiService } from '../../common/service/api/api.service';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userInfoList: Userinfo[];

  selectedUser: Userinfo = new Userinfo();

  cols: any[];

  searchUser: Userinfo = new Userinfo();

  addedUser: Userinfo = new Userinfo();

  display_add = false;

  display_modify = false;

  display_update = false;

  display_delete = false;

  display_UserRoleLink = false;

  selectedRole: RoleInfo = new RoleInfo();

  fromroles: RoleInfo[];

  toroles: RoleInfo[];

  msgs: Message[] = [];

  userAccountRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; //    // /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/

  userPhoneRegex: RegExp = /^1[3|4|5|8][0-9]\d{4,8}$/;

  accountState: any[];

  addedUserState: any;

  selectedUserState: any;

  @Input() data: string;
  constructor(private service: ApiService, private breadcrumbService: BreadcrumbService,
    public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'System' },
      { label: 'User' },
    ]);
    this.tService.setItems('System-User');

    this.accountState = [
      { name: '启用', code: 'Y' },
      { name: '禁用', code: 'N' },
    ];
  }

  ngOnInit() {
    this.cols = [
      { field: 'username', header: '用户姓名' },
      { field: 'useraccount', header: '用户账号' },
      /*         { field: 'password', header: '密码' }, */
      { field: 'sitename', header: '部门' },
      { field: 'email', header: '邮箱' },
      { field: 'phone', header: '电话' },
      { field: 'enabled', header: '账号状态' },
      { field: 'description', header: '账号备注' },
    ];
    this.getAllUserInfoData();
  }

  showAddUserDialog() {
    this.addedUser.description = null;
    this.addedUser.email = null;
    this.addedUser.enabled = null;
    this.addedUser.password = null;
    this.addedUser.phone = null;
    this.addedUser.sitename = null;
    this.addedUser.useraccount = null;
    this.addedUser.username = null;
    this.display_add = true;
  }

  showUpdateUserDialog() {
    if (this.selectedUser != null) {
      this.display_modify = true;
      this.display_update = true;
      this.display_delete = false;
    }
  }

  showDeleteUserDialog() {
    if (this.selectedUser != null) {
      this.display_delete = true;
      this.display_update = false;
      this.display_modify = true;
    }
  }

  showUserRoleLinkDialog() {
    if (this.selectedUser.useraccount != null) {
      this.display_UserRoleLink = true;
      const options = {
        params: { userAccount: this.selectedUser.useraccount }
      };
      this.service.get('/role/selectAll/roleInfoWithOutExist', options).subscribe(
        (res) => {
          debugger;
          this.fromroles = <RoleInfo[]>res;
        },
        (error) => { console.log(error); }
      );
      this.service.get('/role/select/roleInfo', options).subscribe(
        (res) => {
          this.toroles = <RoleInfo[]>res;
        },
        (error) => { console.log(error); }
      );
    }

  }


  getAllUserInfoData() {
    this.service.getAll('/user/selectAll/userInfo').subscribe(
      (res) => {
        console.log(res);
        this.userInfoList = <Userinfo[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  addUser() {
    this.addedUser.enabled = this.addedUserState.code;
    this.service.post('/user/insert/userInfo', this.addedUser).subscribe(
      (res) => {
        console.log(res);
        this.getAllUserInfoData();
        this.display_add = false;
      },
      (error) => { console.log(error); }
    );
  }

  deleteUser() {
    console.log('delete');
    this.service.put('/user/delete/userInfo', this.selectedUser).subscribe(
      (res) => {
        console.log(res);
        this.getAllUserInfoData();
        this.display_modify = false;
        this.display_delete = false;
      },
      (error) => { console.log(error); }
    );
  }

  updateUser() {
    this.selectedUser.enabled = this.selectedUserState.code;
    this.service.put('/user/update/userInfo', this.selectedUser).subscribe(
      (res) => {
        console.log(res);
        this.getAllUserInfoData();
        this.display_modify = false;
        this.display_update = false;
      },
      (error) => { console.log(error); }
    );
  }


  onRowSelect(event) {
    console.log(event.data);
    this.selectedUser = event.data;
  }

  cancel() {
    this.display_add = false;
  }

  cancel_modify() {
    this.display_modify = false;
    this.display_delete = false;
    this.display_update = false;
  }

  onMoveToRoleTarget(event) {
    console.log(event.items);
    console.log(this.toroles);
  }

  addUserRoleLink() {
    if (this.toroles.length === 1) {
      this.showMessage('success', 'success message', '666');
      const userRoleLink: UserRoleLink = new UserRoleLink();
      userRoleLink.useraccount = this.selectedUser.useraccount;
      userRoleLink.rolename = this.toroles[0].rolename;
      this.service.post('/userRoleLink/insert/userRoleLink', userRoleLink).subscribe(
        (res) => {
          this.display_UserRoleLink = false;
        },
        (error) => { console.log(error); }
      );
    } else {
      // alert('目标组数量大于1');
      this.showMessage('error', 'error message', '目标数组大于1');
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
