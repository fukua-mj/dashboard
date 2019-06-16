package com.boe.idm.project.model.system;

import java.math.BigDecimal;

public class DAS_PnlKilling {
    private BigDecimal id;

    private String factoryyear;

    private String factorymonth;

    private String factoryname;

    private String productcategory;

    private String productiontype;

    private String defectcode;

    private String pnlKilling;

    private String updatetime;

    private String updateuser;

    private String reserved1;

    private String reserved2;

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public String getFactoryyear() {
        return factoryyear;
    }

    public void setFactoryyear(String factoryyear) {
        this.factoryyear = factoryyear == null ? null : factoryyear.trim();
    }

    public String getFactorymonth() {
        return factorymonth;
    }

    public void setFactorymonth(String factorymonth) {
        this.factorymonth = factorymonth == null ? null : factorymonth.trim();
    }

    public String getFactoryname() {
        return factoryname;
    }

    public void setFactoryname(String factoryname) {
        this.factoryname = factoryname == null ? null : factoryname.trim();
    }

    public String getProductcategory() {
        return productcategory;
    }

    public void setProductcategory(String productcategory) {
        this.productcategory = productcategory == null ? null : productcategory.trim();
    }

    public String getProductiontype() {
        return productiontype;
    }

    public void setProductiontype(String productiontype) {
        this.productiontype = productiontype == null ? null : productiontype.trim();
    }

    public String getDefectcode() {
        return defectcode;
    }

    public void setDefectcode(String defectcode) {
        this.defectcode = defectcode == null ? null : defectcode.trim();
    }

    public String getPnlKilling() {
        return pnlKilling;
    }

    public void setPnlKilling(String pnlKilling) {
        this.pnlKilling = pnlKilling == null ? null : pnlKilling.trim();
    }

    public String getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(String updatetime) {
        this.updatetime = updatetime == null ? null : updatetime.trim();
    }

    public String getUpdateuser() {
        return updateuser;
    }

    public void setUpdateuser(String updateuser) {
        this.updateuser = updateuser == null ? null : updateuser.trim();
    }

    public String getReserved1() {
        return reserved1;
    }

    public void setReserved1(String reserved1) {
        this.reserved1 = reserved1 == null ? null : reserved1.trim();
    }

    public String getReserved2() {
        return reserved2;
    }

    public void setReserved2(String reserved2) {
        this.reserved2 = reserved2 == null ? null : reserved2.trim();
    }
}