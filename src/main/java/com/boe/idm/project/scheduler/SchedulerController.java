package com.boe.idm.project.scheduler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
public class SchedulerController {
	
	private final Logger logger = LoggerFactory.getLogger(SchedulerController.class);
	
	/*
	 * http://www.quartz-scheduler.org/documentation/quartz-2.x/tutorials/crontrigger.html
	 * cron=
	 * seq		field  				value 
 		1		seconds      		0~59 , - * /
 		2		minutes		 		0~59 , - * /
 		3		hours		 		0~23 , - * /
		4		day of month 		1~31 , - * ? / L W
		5		month		 		1~12 or JAN-DEC , - * /
		6		day of week	 		1-7 or SUN-SAT , - * ? / L #
		7		years (optional) 	1970~2099 , - * /
	*/
	
	//every day every hour 10minute
/*	@Scheduled(cron="0 10 * * * *")
    public void scheduledAnnotationCron() {
		String osType = System.getProperty("os.name");
		logger.debug ("scheduler run os type is {}", osType);
        
    }*/
}
