package com.boe.idm.project.controller.system;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.system.NoticeBoard2;
import com.boe.idm.project.service.system.NoticeBoardService;
import com.boe.utils.json.JsonUtils;

@RestController
@RequestMapping(value="/api/noticeboard")
public class NoticeBoardNewController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(NoticeBoardNewController.class);
	
	@Autowired
	private NoticeBoardService noticeBoardService;
	
	@RequestMapping(value="/getNoticeList")
	public @ResponseBody List<NoticeBoard2> getNoticeList(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="currentUserName",required = true)String currentUserName
			) throws Exception {	
		List<NoticeBoard2> list = noticeBoardService.getNoticeList(currentUserName);
		List<NoticeBoard2> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getReceivername().contains(currentUserName)) {
				result.add(list.get(i));
			}
		}
		return result;
	}
	
	@RequestMapping(value="/getSendHistory")
	public @ResponseBody List<NoticeBoard2> getSendHistory(
				HttpServletRequest request,
				HttpServletResponse response,
				@RequestParam(value="author",required = true)String author
			) throws Exception {	
		List<NoticeBoard2> list = noticeBoardService.getSendHistory(author);
		List<NoticeBoard2> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			NoticeBoard2 notice = list.get(i);
			notice.setMessagedetail(list.get(i).getMessagedetail().length() > 10?list.get(i).getMessagedetail().substring(0, 10)+"...":list.get(i).getMessagedetail());
			result.add(notice);
		}
		return result;
	}
	
	@RequestMapping(value="getNoticeContent")
	public @ResponseBody List<NoticeBoard2> getNoticeContent(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="subject",required=true) String subject,
			@RequestParam(value="timekey",required=true) String timekey
		) throws Exception {
		NoticeBoard2 notice = new NoticeBoard2();
		if (!subject.equals("none") && !timekey.equals("none")) {
			notice = noticeBoardService.getNotice(subject,timekey);
		} else {
			notice = noticeBoardService.getLatestNotice();
		}
		
		NoticeBoard2 lastNotice = new NoticeBoard2(); 
		NoticeBoard2 nextNotice = new NoticeBoard2(); 
		if (!subject.equals("none") && !timekey.equals("none")) {
			lastNotice = noticeBoardService.getLastNotice(timekey); 
			nextNotice = noticeBoardService.getNextNotice(timekey); 
			if (lastNotice == null) {
				lastNotice = new NoticeBoard2();
				lastNotice.setTimekey("没有了");
				lastNotice.setSubject("没有了");
			}
			if (nextNotice == null) {
				nextNotice = new NoticeBoard2();
				nextNotice.setTimekey("没有了");
				nextNotice.setSubject("没有了");
			}
		}
		
		List<NoticeBoard2> result = new ArrayList<>();
		result.add(lastNotice);
		result.add(notice);
		result.add(nextNotice);
		return result;
	}
	
	@RequestMapping(value="/updateNoticeVisitCount")
	public void updateNoticeVisitCount(
			HttpServletRequest request, 
			HttpServletResponse response,
			@RequestParam(value="subject",required=true) String subject,
			@RequestParam(value="timekey",required=true) String timekey) throws Exception {
		NoticeBoard2 notice = noticeBoardService.getNotice(subject, timekey); 
		String visitcount = String.valueOf(notice.getVisitcount().intValue()+1);
		noticeBoardService.updateNoticeVisitCount(subject,timekey,visitcount);
	}
	
	public static String NoticeSubjectSubstring(String string) {		
		String subString = string.substring(4);		
		int index = subString.indexOf("</h2>");			
		return subString.substring(0, index);
	}

	@RequestMapping(value="/getLatestNotice")
	public @ResponseBody NoticeBoard2 getLatestNotice(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value="userName",required = true) String userName) throws Exception {
		List<NoticeBoard2> list = noticeBoardService.getNoticeList(userName);
		NoticeBoard2 result = new NoticeBoard2();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getReceivername().contains(userName)) {
				result = list.get(i);
				result.setMessagedetail(list.get(i).getMessagedetail().length()<10 ? list.get(i).getMessagedetail() : list.get(i).getMessagedetail().toString().substring(0, 10)+"...");
				break;
			}
		}
		return result;
	}
}
