package com.boe.idm.project.utils;

import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.CoreMatchers.theInstance;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Component
public class ImgUtil {
	
	/**
	 * 读数据库，获取图片输入流
	 * @param address
	 * @return
	 */
	public FileInputStream query_getPhotoImageBlob(String address) {
		FileInputStream isFileInputStream = null;
		File filePic = new File(address);
		try {
			isFileInputStream = new FileInputStream(filePic);
		} catch (FileNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return isFileInputStream;
	}
	
	/**
	 * 获取图片并显示在页面
	 * @param address
	 * @param request
	 * @param response
	 * @throws IOException
	 */
	@RequestMapping(value="queryPic")
	public void queryPic(@RequestParam(required=false) String address, HttpServletRequest request, HttpServletResponse response) throws IOException {
		if (address != null) {
			response.setContentType("image/jpeg");
			FileInputStream isFileInputStream = this.query_getPhotoImageBlob(address);
			
			if (isFileInputStream != null) {
				int i = isFileInputStream.available(); //得到文件大小
				byte data[] = new byte[i];
				isFileInputStream.read(data); //读数据
				isFileInputStream.close();
				response.setContentType("image/jpeg"); //设置返回的文件类型
				OutputStream toClient = response.getOutputStream(); //得到向客户端输出二进制数据的对象
				toClient.write(data);
				toClient.close();
			}
		}
	}
	
	
}
