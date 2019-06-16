import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { Message } from 'primeng/api';
import { RoleInfo } from './../../common/model/system/roleinfo';
import { ApiService } from './../../common/service/api/api.service';
import { MenuInfo } from './../../common/model/system/menuinfo';
import { Component, OnInit } from '@angular/core';
import { RoleMenuLink } from '../../common/model/system/rolemenulink';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-menuinfo',
  templateUrl: './menuinfo.component.html',
  styleUrls: ['./menuinfo.component.css']
})
export class MenuinfoComponent implements OnInit {

  menuInfoList: MenuInfo[];

  cols: any[];

  selectedMenu: MenuInfo = new MenuInfo();

  searchMenu: MenuInfo = new MenuInfo();

  addedMenu: MenuInfo = new MenuInfo();

  display_add = false;

  display_modify = false;

  display_update = false;

  display_delete = false;

  display_MenuRoleLink = false;

  selectedRole: RoleInfo = new RoleInfo();

  fromroles: RoleInfo[];

  toroles: RoleInfo[];

  msgs: Message[] = [];

  constructor(private service: ApiService, private breadcrumbService: BreadcrumbService,
    public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'System' },
      { label: 'Menu' },
    ]);
    this.tService.setItems('System-Menu');
  }

  ngOnInit() {
    this.cols = [
      { field: 'menuname', header: '菜单标识' },
      { field: 'chinese', header: '菜单中文名' },
      { field: 'english', header: '菜单英文名' },
      { field: 'korean', header: '菜单韩文名' },
      { field: 'icon', header: '图标' },
      { field: 'parentname', header: '父菜单' },
      /*         { field: 'url', header: 'URL' }, */
      { field: 'routerlink', header: 'RouterLink' },
      { field: 'isparent', header: '是否父菜单' },
      { field: 'description', header: '菜单描述' },
      { field: 'sort', header: '排序' },
      { field: 'hideflag', header: '隐藏标志位' },
      { field: 'reserved1', header: 'Reserved1' },
      { field: 'reserved2', header: 'Reserved2' },
      { field: 'reserved3', header: 'Reserved3' },
    ];
    this.getAllMenuInfoData();
  }

  getAllMenuInfoData() {
    this.service.getAll('/menu/selectAll/menuInfo').subscribe(
      (res) => {
        this.menuInfoList = <MenuInfo[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  showAddMenuDialog() {
    this.addedMenu.chinese = null;
    this.addedMenu.description = null;
    this.addedMenu.english = null;
    this.addedMenu.hideflag = null;
    this.addedMenu.icon = null;
    this.addedMenu.isparent = null;
    this.addedMenu.korean = null;
    this.addedMenu.menuname = null;
    this.addedMenu.parent = null;
    this.addedMenu.parentname = null;
    this.addedMenu.reserved1 = null;
    this.addedMenu.reserved2 = null;
    this.addedMenu.reserved3 = null;
    this.addedMenu.routerlink = null;
    this.addedMenu.url = null;
    this.addedMenu.sort = null;
    this.display_add = true;
  }

  showUpdateMenuDialog() {
    if (this.selectedMenu.menuname != null) {
      this.display_modify = true;
      this.display_update = true;
      this.display_delete = false;
    }
  }

  showDeleteMenuDialog() {
    if (this.selectedMenu.menuname != null) {
      this.display_delete = true;
      this.display_update = false;
      this.display_modify = true;
    }
  }

  showMenuRoleLinkDialog() {
    if (this.selectedMenu.menuname != null) {
      this.display_MenuRoleLink = true;
      const options = {
        params: { menuName: this.selectedMenu.menuname }
      };
      this.service.get('/role/selectAll/roleInfoWithOutExistByMenuName', options).subscribe(
        (res) => {
          this.fromroles = <RoleInfo[]>res;
        },
        (error) => { console.log(error); }
      );
      this.service.get('/role/select/roleInfoByMenuName', options).subscribe(
        (res) => {
          this.toroles = <RoleInfo[]>res;
        },
        (error) => { console.log(error); }
      );
    }

  }

  addMenu() {
    this.service.post('/menu/insert/menuInfo', this.addedMenu).subscribe(
      (res) => {
        console.log(res);
        this.getAllMenuInfoData();
        this.display_add = false;
      },
      (error) => { console.log(error); }
    );
  }

  deleteMenu() {
    this.service.put('/menu/delete/menuInfo', this.selectedMenu).subscribe(
      (res) => {
        console.log(res);
        this.getAllMenuInfoData();
        this.display_modify = false;
        this.display_delete = false;
      },
      (error) => { console.log(error); }
    );
  }

  updateMenu() {
    this.service.put('/menu/update/menuInfo', this.selectedMenu).subscribe(
      (res) => {
        console.log(res);
        this.getAllMenuInfoData();
        this.display_modify = false;
        this.display_update = false;
      },
      (error) => { console.log(error); }
    );
  }

  onRowSelect(event) {
    console.log(event.data);
    this.selectedMenu = event.data;
  }

  addMenuRoleLink() {
    const roleMenuLink: RoleMenuLink[] = [];
    for (let i = 0; i < this.toroles.length; i++) {
      roleMenuLink[i] = new RoleMenuLink();
      roleMenuLink[i].rolename = this.toroles[i].rolename;
      roleMenuLink[i].menuname = this.selectedMenu.menuname;
    }
    this.service.post('/roleMenuLink/insert/roleMenuLinksByMenu', roleMenuLink).subscribe(
      (res) => {
        this.showMessage('success', 'success message', '666');
        this.display_MenuRoleLink = false;
      },
      (error) => { console.log(error); }
    );
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
