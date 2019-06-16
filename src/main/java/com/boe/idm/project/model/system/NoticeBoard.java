package com.boe.idm.project.model.system;

import java.math.BigDecimal;
import java.util.Date;

public class NoticeBoard {
    private Date timekey;

    private String author;

    private String subject;

    private String messagedetail;

    private String receivername;

    private String confirmflag;

    private String imageurl;

    private Object visitcount;

    public Date getTimekey() {
        return timekey;
    }

    public void setTimekey(Date timekey) {
        this.timekey = timekey;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject == null ? null : subject.trim();
    }

    public String getMessagedetail() {
        return messagedetail;
    }

    public void setMessagedetail(String messagedetail) {
        this.messagedetail = messagedetail == null ? null : messagedetail.trim();
    }

    public String getReceivername() {
        return receivername;
    }

    public void setReceivername(String receivername) {
        this.receivername = receivername == null ? null : receivername.trim();
    }

    public String getConfirmflag() {
        return confirmflag;
    }

    public void setConfirmflag(String confirmflag) {
        this.confirmflag = confirmflag == null ? null : confirmflag.trim();
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl == null ? null : imageurl.trim();
    }

    public Object getVisitcount() {
        return visitcount;
    }

    public void setVisitcount(BigDecimal visitcount) {
        this.visitcount = visitcount;
    }
}