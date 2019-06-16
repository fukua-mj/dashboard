import { Component, OnInit } from '@angular/core';
import { RoleTabViewLink } from 'app/common/model/system/roletabviewlink';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-tabviewinfo',
  templateUrl: './tabviewinfo.component.html',
  styleUrls: ['./tabviewinfo.component.css']
})
export class TabviewinfoComponent implements OnInit {

  roleTabViewInfoList: RoleTabViewLink[];

  selectedRoleTabViewLink: RoleTabViewLink;

  display_modify: boolean = false;

  cols: any[];

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.cols = [
      { field: 'rolename', header: '角色名称' },
      { field: 'menuname', header: '菜单名称' },
      { field: 'tabvlewindex', header: '标签页Index' },
      { field: 'useflag', header: '隐藏标志位' },
      { field: 'description', header: '标签页描述' },
    ];
    this.getRoleTabViewLinkInfo();
  }

  getRoleTabViewLinkInfo() {
    this.http.getAll('/roletabviewlink/select/roleTabViewLink').subscribe(
      (res) => {
        this.roleTabViewInfoList = <RoleTabViewLink[]>res;
      },
      (error) => { console.log(error); }
    );
  }

}
