package com.boe.idm.project.model.system;

import java.math.BigDecimal;

public class RoleTabviewLink {
    private String rolename;

    private String menuname;

    private BigDecimal tabvlewindex;

    private String useflag;

    private String description;

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

    public BigDecimal getTabvlewindex() {
        return tabvlewindex;
    }

    public void setTabvlewindex(BigDecimal tabvlewindex) {
        this.tabvlewindex = tabvlewindex;
    }

    public String getUseflag() {
        return useflag;
    }

    public void setUseflag(String useflag) {
        this.useflag = useflag == null ? null : useflag.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }
}