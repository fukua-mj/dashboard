package com.boe.idm.project.mapper.primary.system;

import com.boe.idm.project.model.system.NoticeBoard;
import com.boe.idm.project.model.system.NoticeBoard2;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface NoticeBoardMapper {
    int deleteByPrimaryKey(Date timekey);

    int insert(NoticeBoard record);

    int insertSelective(NoticeBoard record);

    NoticeBoard selectByPrimaryKey(Date timekey);

    int updateByPrimaryKeySelective(NoticeBoard record);

    int updateByPrimaryKey(NoticeBoard record);
    
    List<NoticeBoard2> getNoticeList(@Param(value="userName")String userName);

	void insertByItem(@Param(value="timeKey")String timeKey, @Param(value="author")String author, @Param(value="subject")String subject, 
			@Param(value="messageDetail")String messageDetail, @Param(value="receiveName")String receiveName,
			@Param(value="confirmflag")String confirmflag, @Param(value="imageurl")String imageurl, @Param(value="visitcount")Object visitcount);

	NoticeBoard2 getNotice(@Param(value="subject")String subject, @Param(value="timekey")String timekey);

	void updateNoticeVisitCount(@Param(value="subject")String subject, @Param(value="timekey")String timekey, @Param(value="visitcount")String visitcount);

	NoticeBoard2 getLastNotice(@Param(value="timekey")String timekey);

	NoticeBoard2 getNextNotice(@Param(value="timekey")String timekey);

	List<NoticeBoard2> getSendHistory(@Param(value="author")String author);

	NoticeBoard2 getLatestNotice(); 
}