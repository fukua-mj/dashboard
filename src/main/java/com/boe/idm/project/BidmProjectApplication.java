package com.boe.idm.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling 
@SpringBootApplication
public class BidmProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BidmProjectApplication.class, args);
	}
}
