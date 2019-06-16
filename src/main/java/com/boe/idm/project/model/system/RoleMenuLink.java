package com.boe.idm.project.model.system;

import java.util.Date;

public class RoleMenuLink {
    private String rolename;

    private String menuname;

    private Date eventtime;

    private String eventuser;

    private String sort;

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
    }

    public String getMenuname() {
        return menuname;
    }

    public void setMenuname(String menuname) {
        this.menuname = menuname == null ? null : menuname.trim();
    }

    public Date getEventtime() {
        return eventtime;
    }

    public void setEventtime(Date eventtime) {
        this.eventtime = eventtime;
    }

    public String getEventuser() {
        return eventuser;
    }

    public void setEventuser(String eventuser) {
        this.eventuser = eventuser == null ? null : eventuser.trim();
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort == null ? null : sort.trim();
    }
}