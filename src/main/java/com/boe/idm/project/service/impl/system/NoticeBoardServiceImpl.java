package com.boe.idm.project.service.impl.system;

import static org.hamcrest.CoreMatchers.nullValue;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.boe.idm.project.mapper.primary.system.NoticeBoardMapper;
import com.boe.idm.project.model.system.NoticeBoard;
import com.boe.idm.project.model.system.NoticeBoard2;
import com.boe.idm.project.service.system.NoticeBoardService;
import com.boe.idm.project.utils.DateUtils;

@Service
public class NoticeBoardServiceImpl implements NoticeBoardService{
	
	@Resource
	private NoticeBoardMapper noticeBoardMapper;

	@Override
	public List<NoticeBoard2> getNoticeList(String userName) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getNoticeList(userName);
	}

	@Override
	public int insert(NoticeBoard noticeBoard) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.insert(noticeBoard);
	}

	@Override
	public void insertByEntity(NoticeBoard noticeBoard) {
		// TODO Auto-generated method stub
		String timeKey = DateUtils.getNowDateStr();
		String author = noticeBoard.getAuthor();
		String subject = noticeBoard.getSubject();
		String messageDetail = noticeBoard.getMessagedetail();
		String receiveName = noticeBoard.getReceivername();
	    String confirmflag = noticeBoard.getConfirmflag();
	    String imageurl = noticeBoard.getImageurl();
	    Object visitcount = noticeBoard.getVisitcount();
	    
	    noticeBoardMapper.insertByItem(timeKey, author, subject, messageDetail, receiveName, confirmflag, imageurl, visitcount);
		
	}

	@Override
	public NoticeBoard2 getNotice(String subject, String timekey) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getNotice(subject, timekey);
	}

	@Override
	public void updateNoticeVisitCount(String subject, String timekey, String visitcount) {
		// TODO Auto-generated method stub
		noticeBoardMapper.updateNoticeVisitCount(subject, timekey, visitcount);
	}

	@Override
	public NoticeBoard2 getLastNotice(String timekey) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getLastNotice(timekey);
	}

	@Override
	public NoticeBoard2 getNextNotice(String timekey) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getNextNotice(timekey);
	}

	@Override
	public List<NoticeBoard2> getSendHistory(String author) {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getSendHistory(author);
	}

	@Override
	public NoticeBoard2 getLatestNotice() {
		// TODO Auto-generated method stub
		return noticeBoardMapper.getLatestNotice();
	}

	
}
