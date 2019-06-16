package com.boe.idm.project.service.system;

import java.util.List;

import com.boe.idm.project.model.system.NoticeBoard;

import com.boe.idm.project.model.system.NoticeBoard2;


public interface NoticeBoardService {

	List<NoticeBoard2> getNoticeList(String userName);
	
	int insert(NoticeBoard noticeBoard);

	void insertByEntity(NoticeBoard noticeBoard);

	NoticeBoard2 getNotice(String subject, String timekey);

	void updateNoticeVisitCount(String subject, String timekey, String visitcount);

	NoticeBoard2 getLastNotice(String timekey);

	NoticeBoard2 getNextNotice(String timekey);

	List<NoticeBoard2> getSendHistory(String author);

	NoticeBoard2 getLatestNotice();

}
