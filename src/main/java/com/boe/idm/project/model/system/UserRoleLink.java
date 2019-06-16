package com.boe.idm.project.model.system;

import java.util.Date;

public class UserRoleLink {
    private String useraccount;

    private String rolename;

    private Date eventtime;

    private String eventuser;

    public String getUseraccount() {
        return useraccount;
    }

    public void setUseraccount(String useraccount) {
        this.useraccount = useraccount == null ? null : useraccount.trim();
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
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
}