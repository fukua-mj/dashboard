package com.boe.idm.project.controller.system;

import java.io.File;
import java.io.InputStream;
import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.rmi.server.UID;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.boe.idm.project.config.Constants;
import com.boe.idm.project.service.system.CGPlanService;
import com.boe.idm.project.service.system.KillingService;
import com.boe.idm.project.service.system.OperatorInfoService;
import com.boe.idm.project.service.system.OperatorTargetService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.ExcelImportConfig;

@RestController
@RequestMapping(value="/api/file/excel/upload")
public class ExcelUploadController extends JsonUtils{

	private static final Logger logger = LoggerFactory.getLogger(ExcelUploadController.class);
	
	@Autowired
	private KillingService killingService;
	
	@Autowired
	private CGPlanService cgPlanService;
	
	@Autowired
	private OperatorTargetService operatorTargetService;
	
	@Autowired
	private OperatorInfoService	operatorInfoService;
	
	@Value("${bidm.upload.file.directory}")
	private String fileDirectory;
	
	@Autowired
	private MultipartHttpServletRequest multipartResolver;
	
	private final int LIMIT = 100000000;
	private static Integer LOCK  = new Integer(Constants.ONE);
	private static int COUNTER = Constants.ZERO;

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/cg", method = RequestMethod.POST)
	public @ResponseBody String cgFileUpload(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		logger.info("------------> FileUpload Start");
		JSONObject resultJson = new JSONObject();
		
		try {
			if (! (request instanceof MultipartHttpServletRequest)) {
				response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Expected multipart request");
				logger.debug("Expected multipart request!!");
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
				resultJson.put("statusCode", HttpServletResponse.SC_BAD_REQUEST);
				resultJson.put("message", "Expected multipart request");
				
				return resultJson.toJSONString();
			 }
			
			// Make & Select Target Path
			File uploadPath = getDefaultPath();
			String uploadPathStr = uploadPath.getAbsolutePath();
			logger.debug("...uploadPath ? " + uploadPathStr);
			
			multipartResolver = (MultipartHttpServletRequest) request;
			Map<String, MultipartFile> multiFileMap = multipartResolver.getFileMap();
			
			logger.debug("...multiFileMap.size ? " + multiFileMap.size() );
			
			String origFileName;
			String origFileExt;
			
			String uid = new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String savedFileId;
			String savedFileName;
			
			Iterator<String> it =  multipartResolver.getFileNames();
			while(it.hasNext()) {
				String filename = it.next();
				MultipartFile mfile = multiFileMap.get(filename);
						
				logger.debug("...multiFileMap mfile getOriginalFilename().length() :: " + mfile.getOriginalFilename().length());
				
				if(mfile.getOriginalFilename().length() > 50){
					logger.debug("result : {} ",Constants.FILE_UPLOAD_RESULT_FAIL);
					logger.debug("status code : {} ",HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					logger.debug("Request File Name too long, limit 50");
					resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
					resultJson.put("statusCode", HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					resultJson.put("message", "Request File Name too long, limit 50");
					
					break;
				}
				
				if( mfile.getOriginalFilename().length() > 0){
					
					ResponseEntity<String> resolveResult = importKillingExcel(request, response, mfile, 0);
					
					resultJson.put("resolveResult", resolveResult);
														
					savedFileId = uid + Constants.UNDER_SCORE + getUniqueId();
					origFileName = mfile.getOriginalFilename().replaceAll(Constants.SINGLE_SPACE, Constants.BLANK);
					origFileExt =  origFileName.substring(origFileName.lastIndexOf(Constants.DOT) + Constants.ONE);
					logger.debug("...mfile .getSize() ? "+ mfile.getSize());
					logger.debug("...mfile .origFileExt() ? "+ origFileExt);
					savedFileName = uploadPathStr + File.separator + savedFileId + Constants.DOT + origFileExt;

					resultJson.put("origFileName", origFileName);
					resultJson.put("name", savedFileId + Constants.DOT + origFileExt);
					resultJson.put("localPath", savedFileName);
					resultJson.put("size", mfile.getSize());
					
					
					File saveFile = new File(savedFileName);
					mfile.transferTo(saveFile);
					
					// insert file DB
					// TODO
					
				}
				//1 file process
				break;
			}//end while
			//fail ? ??? ??.
			if(resultJson.get("result") == null) {
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_SUCCESS);
				resultJson.put("statusCode", HttpServletResponse.SC_OK);
			}
			
		} catch (Exception e) {
			resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
			resultJson.put("statusCode", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resultJson.put("message", "Internal Server Error");
			e.printStackTrace();
		}
		
		return resultJson.toJSONString();
	}

	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/operatorinfo", method = RequestMethod.POST)
	public @ResponseBody String operatorInfoFileUpload(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		logger.info("------------> FileUpload Start");
		JSONObject resultJson = new JSONObject();
		
		try {
			if (! (request instanceof MultipartHttpServletRequest)) {
				response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Expected multipart request");
				logger.debug("Expected multipart request!!");
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
				resultJson.put("statusCode", HttpServletResponse.SC_BAD_REQUEST);
				resultJson.put("message", "Expected multipart request");
				
				return resultJson.toJSONString();
			 }
			
			// Make & Select Target Path
			File uploadPath = getDefaultPath();
			String uploadPathStr = uploadPath.getAbsolutePath();
			logger.debug("...uploadPath ? " + uploadPathStr);
			
			multipartResolver = (MultipartHttpServletRequest) request;
			Map<String, MultipartFile> multiFileMap = multipartResolver.getFileMap();
			
			logger.debug("...multiFileMap.size ? " + multiFileMap.size() );
			
			String origFileName;
			String origFileExt;
			
			String uid = new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String savedFileId;
			String savedFileName;
			
			Iterator<String> it =  multipartResolver.getFileNames();
			while(it.hasNext()) {
				String filename = it.next();
				MultipartFile mfile = multiFileMap.get(filename);
						
				logger.debug("...multiFileMap mfile getOriginalFilename().length() :: " + mfile.getOriginalFilename().length());
				
				if(mfile.getOriginalFilename().length() > 50){
					logger.debug("result : {} ",Constants.FILE_UPLOAD_RESULT_FAIL);
					logger.debug("status code : {} ",HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					logger.debug("Request File Name too long, limit 50");
					resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
					resultJson.put("statusCode", HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					resultJson.put("message", "Request File Name too long, limit 50");
					
					break;
				}
				
				if( mfile.getOriginalFilename().length() > 0){
					
					ResponseEntity<String> resolveResult = importKillingExcel(request, response, mfile, 3);
					
					resultJson.put("resolveResult", resolveResult);
														
					savedFileId = uid + Constants.UNDER_SCORE + getUniqueId();
					origFileName = mfile.getOriginalFilename().replaceAll(Constants.SINGLE_SPACE, Constants.BLANK);
					origFileExt =  origFileName.substring(origFileName.lastIndexOf(Constants.DOT) + Constants.ONE);
					logger.debug("...mfile .getSize() ? "+ mfile.getSize());
					logger.debug("...mfile .origFileExt() ? "+ origFileExt);
					savedFileName = uploadPathStr + File.separator + savedFileId + Constants.DOT + origFileExt;

					resultJson.put("origFileName", origFileName);
					resultJson.put("name", savedFileId + Constants.DOT + origFileExt);
					resultJson.put("localPath", savedFileName);
					resultJson.put("size", mfile.getSize());
					
					
					File saveFile = new File(savedFileName);
					mfile.transferTo(saveFile);
					
					// insert file DB
					// TODO
					
				}
				//1 file process
				break;
			}//end while
			//fail ? ??? ??.
			if(resultJson.get("result") == null) {
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_SUCCESS);
				resultJson.put("statusCode", HttpServletResponse.SC_OK);
			}
			
		} catch (Exception e) {
			resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
			resultJson.put("statusCode", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resultJson.put("message", "Internal Server Error");
			e.printStackTrace();
		}
		
		return resultJson.toJSONString();
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/killing", method = RequestMethod.POST)
	public @ResponseBody String kFileUpload(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		logger.info("------------> FileUpload Start");
		JSONObject resultJson = new JSONObject();
		
		try {
			if (! (request instanceof MultipartHttpServletRequest)) {
				response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Expected multipart request");
				logger.debug("Expected multipart request!!");
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
				resultJson.put("statusCode", HttpServletResponse.SC_BAD_REQUEST);
				resultJson.put("message", "Expected multipart request");
				
				return resultJson.toJSONString();
			 }
			
			// Make & Select Target Path
			File uploadPath = getDefaultPath();
			String uploadPathStr = uploadPath.getAbsolutePath();
			logger.debug("...uploadPath ? " + uploadPathStr);
			
			multipartResolver = (MultipartHttpServletRequest) request;
			Map<String, MultipartFile> multiFileMap = multipartResolver.getFileMap();
			
			logger.debug("...multiFileMap.size ? " + multiFileMap.size() );
			
			String origFileName;
			String origFileExt;
			
			String uid = new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String savedFileId;
			String savedFileName;
			
			Iterator<String> it =  multipartResolver.getFileNames();
			while(it.hasNext()) {
				String filename = it.next();
				MultipartFile mfile = multiFileMap.get(filename);
						
				logger.debug("...multiFileMap mfile getOriginalFilename().length() :: " + mfile.getOriginalFilename().length());
				
				if(mfile.getOriginalFilename().length() > 50){
					logger.debug("result : {} ",Constants.FILE_UPLOAD_RESULT_FAIL);
					logger.debug("status code : {} ",HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					logger.debug("Request File Name too long, limit 50");
					resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
					resultJson.put("statusCode", HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					resultJson.put("message", "Request File Name too long, limit 50");
					
					break;
				}
				
				if( mfile.getOriginalFilename().length() > 0){
					
					ResponseEntity<String> resolveResult = importKillingExcel(request, response, mfile, 0);
					
					resultJson.put("resolveResult", resolveResult);
														
					savedFileId = uid + Constants.UNDER_SCORE + getUniqueId();
					origFileName = mfile.getOriginalFilename().replaceAll(Constants.SINGLE_SPACE, Constants.BLANK);
					origFileExt =  origFileName.substring(origFileName.lastIndexOf(Constants.DOT) + Constants.ONE);
					logger.debug("...mfile .getSize() ? "+ mfile.getSize());
					logger.debug("...mfile .origFileExt() ? "+ origFileExt);
					savedFileName = uploadPathStr + File.separator + savedFileId + Constants.DOT + origFileExt;

					resultJson.put("origFileName", origFileName);
					resultJson.put("name", savedFileId + Constants.DOT + origFileExt);
					resultJson.put("localPath", savedFileName);
					resultJson.put("size", mfile.getSize());
					
					
					File saveFile = new File(savedFileName);
					mfile.transferTo(saveFile);
					
					// insert file DB
					// TODO
					
				}
				//1 file process
				break;
			}//end while
			//fail 이 아니면 실행.
			if(resultJson.get("result") == null) {
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_SUCCESS);
				resultJson.put("statusCode", HttpServletResponse.SC_OK);
			}
			
		} catch (Exception e) {
			resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
			resultJson.put("statusCode", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resultJson.put("message", "Internal Server Error");
			e.printStackTrace();
		}
		
		return resultJson.toJSONString();
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/oparatortarget", method = RequestMethod.POST)
	public @ResponseBody String oparatorTargetFileUpload(
			HttpServletRequest request, 
			HttpServletResponse response) throws Exception {

		logger.info("------------> FileUpload Start");
		JSONObject resultJson = new JSONObject();
		
		try {
			if (! (request instanceof MultipartHttpServletRequest)) {
				response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Expected multipart request");
				logger.debug("Expected multipart request!!");
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
				resultJson.put("statusCode", HttpServletResponse.SC_BAD_REQUEST);
				resultJson.put("message", "Expected multipart request");
				
				return resultJson.toJSONString();
			 }
			
			// Make & Select Target Path
			File uploadPath = getDefaultPath();
			String uploadPathStr = uploadPath.getAbsolutePath();
			logger.debug("...uploadPath ? " + uploadPathStr);
			
			multipartResolver = (MultipartHttpServletRequest) request;
			Map<String, MultipartFile> multiFileMap = multipartResolver.getFileMap();
			
			logger.debug("...multiFileMap.size ? " + multiFileMap.size() );
			
			String origFileName;
			String origFileExt;
			
			String uid = new UID().toString().replace(Constants.COLON, Constants.UNDER_SCORE).replace(Constants.DASH, Constants.UNDER_SCORE);
			String savedFileId;
			String savedFileName;
			
			Iterator<String> it =  multipartResolver.getFileNames();
			while(it.hasNext()) {
				String filename = it.next();
				MultipartFile mfile = multiFileMap.get(filename);
						
				logger.debug("...multiFileMap mfile getOriginalFilename().length() :: " + mfile.getOriginalFilename().length());
				
				if(mfile.getOriginalFilename().length() > 50){
					logger.debug("result : {} ",Constants.FILE_UPLOAD_RESULT_FAIL);
					logger.debug("status code : {} ",HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					logger.debug("Request File Name too long, limit 50");
					resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
					resultJson.put("statusCode", HttpServletResponse.SC_REQUEST_URI_TOO_LONG);
					resultJson.put("message", "Request File Name too long, limit 50");
					
					break;
				}
				
				if( mfile.getOriginalFilename().length() > 0){
					
					ResponseEntity<String> resolveResult = importKillingExcel(request, response, mfile, 2);
					
					resultJson.put("resolveResult", resolveResult);
														
					savedFileId = uid + Constants.UNDER_SCORE + getUniqueId();
					origFileName = mfile.getOriginalFilename().replaceAll(Constants.SINGLE_SPACE, Constants.BLANK);
					origFileExt =  origFileName.substring(origFileName.lastIndexOf(Constants.DOT) + Constants.ONE);
					logger.debug("...mfile .getSize() ? "+ mfile.getSize());
					logger.debug("...mfile .origFileExt() ? "+ origFileExt);
					savedFileName = uploadPathStr + File.separator + savedFileId + Constants.DOT + origFileExt;

					resultJson.put("origFileName", origFileName);
					resultJson.put("name", savedFileId + Constants.DOT + origFileExt);
					resultJson.put("localPath", savedFileName);
					resultJson.put("size", mfile.getSize());
					
					
					File saveFile = new File(savedFileName);
					mfile.transferTo(saveFile);
					
					// insert file DB
					// TODO
					
				}
				//1 file process
				break;
			}//end while
			//fail ? ??? ??.
			if(resultJson.get("result") == null) {
				resultJson.put("result", Constants.FILE_UPLOAD_RESULT_SUCCESS);
				resultJson.put("statusCode", HttpServletResponse.SC_OK);
			}
			
		} catch (Exception e) {
			resultJson.put("result", Constants.FILE_UPLOAD_RESULT_FAIL);
			resultJson.put("statusCode", HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			resultJson.put("message", "Internal Server Error");
			e.printStackTrace();
		}
		
		return resultJson.toJSONString();
	}
	

	
	public ResponseEntity<String> importKillingExcel(HttpServletRequest request,HttpServletResponse response,
			MultipartFile filePath,int fileType) throws Exception{ 
		
		String errMsg = "";
		String shopName = "";
		HttpHeaders headers = new HttpHeaders();
		MediaType mt = new MediaType("text","html",Charset.forName("UTF-8"));
		headers.setContentType(mt);
		String json = "";
		try {
			Workbook hssfBook = null;
			InputStream is = filePath.getInputStream();//获取Excel数据
			if (filePath.getOriginalFilename().contains(".xlsx")) {
				hssfBook = new XSSFWorkbook(is);//excel2007
			}else {
				hssfBook = new HSSFWorkbook(is);//excel2003
			}
			String[] tableHeader = null;
			switch (fileType) {
			case ExcelImportConfig.EXCEL_TYPE_KILLING:
				tableHeader = ExcelImportConfig.EXCEL_HEADER_KILLING;
				break;				
			case ExcelImportConfig.EXCEL_TYPE_CG:
				tableHeader = ExcelImportConfig.EXCEL_HEADER_CG;
				break;				
			case ExcelImportConfig.EXCEL_TYPE_OPERATORTARGET:
				tableHeader = ExcelImportConfig.EXCEL_HEADER_OPERATORTARGET;
				break;				
			case ExcelImportConfig.EXCEL_TYPE_OPERATORINFO:
				tableHeader = ExcelImportConfig.EXCEL_HEADER_OPERATORINFO;
				break;
			default:
				break;
			}
			
			Sheet sheet = hssfBook.getSheetAt(0);
			int rowNum = sheet.getLastRowNum();
			if (rowNum == 0) {
				errMsg = "您上传的excel没有数据";
				json = "{success:false,data:'}"+errMsg+"'}";
				return new ResponseEntity<String>(json,headers,HttpStatus.OK);
			}
			Row row = sheet.getRow(0);//第一行数据
			int colNum = 0;
			colNum = row.getLastCellNum();//row.getPhysicalNumberOfCells()
			//验证表头格式是否正确
			if (colNum == tableHeader.length) {
				for (int i = 0; i < tableHeader.length; i++) {
					row.getCell(i).setCellType(Cell.CELL_TYPE_STRING);
					if (!tableHeader[i].trim().equals(row.getCell(i).getStringCellValue().trim())) {
						errMsg = row.getCell(i).getStringCellValue().trim()+"--"+tableHeader[i].trim()+"--"+"模板列头不正确！";
						json = "{success:false, data:'" + errMsg + "'}";
						return new ResponseEntity<String>(json, headers,
								HttpStatus.OK);
					}
				}
			}else {
				errMsg = "表头数据异常，请检查模板格式！";
			}

			if (errMsg.equals("")) {
				String[][] dataList = new String[rowNum][colNum];
				for (int i = 1; i < rowNum+1; i++) {
					row = sheet.getRow(i);
					colNum = row.getLastCellNum();
					if (colNum == tableHeader.length) {
						for (int j = 0; j < colNum; j++) {
							String excelData =getHSSFCellText(row.getCell((short) j)); 
/*							if (j==0||j==1) {
								killingList[i-1][j] = excelData.substring(0,excelData.indexOf('.'));
							}else {
*/								dataList[i-1][j] = excelData;
							//}

						}
					}else {
						errMsg = "第"+String.valueOf(i)+"行数据异常，请校验！";//判断每一条Killing数据的Item 数量是否正常
						break;
					}
					shopName = dataList[i-1][0];
				}
				if (errMsg.equals("")) {
					int rtn_delete;
					switch (fileType) {
					case ExcelImportConfig.EXCEL_TYPE_KILLING:
						
						break;				
					case ExcelImportConfig.EXCEL_TYPE_CG:
						rtn_delete = cgPlanService.deleteAllCGPlan(shopName);	
						break;				
					case ExcelImportConfig.EXCEL_TYPE_OPERATORTARGET:
						rtn_delete = operatorTargetService.deleteAllOperatorTarget(shopName);	
						break;				
					case ExcelImportConfig.EXCEL_TYPE_OPERATORINFO:
						rtn_delete = operatorInfoService.deleteAllOperatorInfo(shopName);
						break;
					default:
						break;
					}
					
					StringBuffer errRowNumber = new StringBuffer();
					for (int i = 0; i < rowNum; i++) {
						int result = 0;
						switch (fileType) {
						case ExcelImportConfig.EXCEL_TYPE_KILLING:
							result = setKilling(dataList[i]);
							break;
						case ExcelImportConfig.EXCEL_TYPE_CG:
							result = setCGPlan(dataList[i], "Admin");
							break;
						case ExcelImportConfig.EXCEL_TYPE_OPERATORTARGET:
							result = setOperatorTarget(dataList[i]);
							break;
						case ExcelImportConfig.EXCEL_TYPE_OPERATORINFO:
							result = setOperatorInfo(dataList[i]);
							break;

						default:
							break;
						}

						if (result!=1) {
							errRowNumber.append("["+String.valueOf(i+1)+"],");
						}
					}
					if (!errRowNumber.toString().equals("")) {
						errMsg = "第"+errRowNumber.toString()+"导入异常！";
						json = "{success:true, data:'" + errMsg + "'}";//某几行数据导入失败
					}else {
						json = "{success:true, data:'" + "导入成功！" + "'}";//导入成功
					}
				}else {
					json = "{success:false, data:'" + errMsg + "'}";//某一行数据Item数量异常
				}
			} else {
				json = "{success:false, data:'" + errMsg + "'}";//表头数据格式异常
			}
		} catch (Exception e) {
			// TODO: handle exception
			json = "{success:false, data:'"+ e.getMessage() +"'}";
			e.printStackTrace();
		}
		
		return new ResponseEntity<String>(json, headers, HttpStatus.OK);
		
	}
	
	
	public File getDefaultPath() {

		String basePathStr = fileDirectory;
		logger.info("basePathStr : "+basePathStr);
		// Create Second Level Directory
		File detailPath = new File(basePathStr);
		if(!detailPath.exists()){
			detailPath.mkdirs();
		}
		
		return detailPath;
	}
	public String getUniqueId() {
		
	    int current;
	    synchronized (LOCK) {
	        current = COUNTER++;
	        if(current >= LIMIT) {
	        	COUNTER = 0;
	        	current = COUNTER++;
			}
	    }
	    String id = Integer.toString(current);
	
	    if (current < LIMIT) {
	        id = ("00000000" + id).substring(id.length());
	    }
	    return id;
	}
	
	private String getHSSFCellText(Cell cell) {
		String cellValue = "";
		if (cell != null) {
			switch (cell.getCellType()) {
			case HSSFCell.CELL_TYPE_FORMULA:
			case HSSFCell.CELL_TYPE_NUMERIC:
				//获取表格的原始数据，否则会得到double值，而且当长度太大时会变成科学记数法
				DecimalFormat decimalFormat = new DecimalFormat("0");
				cellValue = decimalFormat.format(cell.getNumericCellValue());
				break;
			case HSSFCell.CELL_TYPE_STRING:
				cellValue = cell.getRichStringCellValue().getString();
				break;
			default:
				cellValue="";
			}
		}
		return cellValue;
	}
	
	private int setKilling(String[] arrKilling) {
		int rtn = 0;
		if (arrKilling.length==7) {
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String timeKey=df.format(new Date());
			
			String factoryYear = arrKilling[0];
			String factoryMonth = arrKilling[1];
			String factoryName = arrKilling[2];
			String productCategory = arrKilling[3];
			String productionType = "-";
			String defectCode = arrKilling[4];
			String pnlKilling = arrKilling[5];
			String updateTime = timeKey;
			String updateUser = arrKilling[6];
			
			rtn = killingService.setKillingWithoutId(factoryYear,factoryMonth,factoryName,productCategory,productionType,defectCode,pnlKilling,updateTime,updateUser);			
		}
		
		return rtn;
	}
	
	private int setCGPlan(String[] arrOperatorTarget,String userName) {
		int rtn = 0;
		if (arrOperatorTarget.length==35) {
			String factoryName = arrOperatorTarget[0];
			String productCategory = arrOperatorTarget[1];
			String category = arrOperatorTarget[2];
			String inout = arrOperatorTarget[3];
			BigDecimal _01h = new BigDecimal(arrOperatorTarget[4]);
			BigDecimal _02h = new BigDecimal(arrOperatorTarget[5]);
			BigDecimal _03h = new BigDecimal(arrOperatorTarget[6]);
			BigDecimal _04h = new BigDecimal(arrOperatorTarget[7]);
			BigDecimal _05h = new BigDecimal(arrOperatorTarget[8]);
			BigDecimal _06h = new BigDecimal(arrOperatorTarget[9]);
			BigDecimal _07h = new BigDecimal(arrOperatorTarget[10]);
			BigDecimal _08h = new BigDecimal(arrOperatorTarget[11]);
			BigDecimal _09h = new BigDecimal(arrOperatorTarget[12]);
			BigDecimal _10h = new BigDecimal(arrOperatorTarget[13]);
			BigDecimal _11h = new BigDecimal(arrOperatorTarget[14]);
			BigDecimal _12h = new BigDecimal(arrOperatorTarget[15]);
			BigDecimal _13h = new BigDecimal(arrOperatorTarget[16]);
			BigDecimal _14h = new BigDecimal(arrOperatorTarget[17]);
			BigDecimal _15h = new BigDecimal(arrOperatorTarget[18]);
			BigDecimal _16h = new BigDecimal(arrOperatorTarget[19]);
			BigDecimal _17h = new BigDecimal(arrOperatorTarget[20]);
			BigDecimal _18h = new BigDecimal(arrOperatorTarget[21]);
			BigDecimal _19h = new BigDecimal(arrOperatorTarget[22]);
			BigDecimal _20h = new BigDecimal(arrOperatorTarget[23]);
			BigDecimal _21h = new BigDecimal(arrOperatorTarget[24]);
			BigDecimal _22h = new BigDecimal(arrOperatorTarget[25]);
			BigDecimal _23h = new BigDecimal(arrOperatorTarget[26]);
			BigDecimal _24h = new BigDecimal(arrOperatorTarget[27]);
			BigDecimal _25h = new BigDecimal(arrOperatorTarget[28]);
			BigDecimal _26h = new BigDecimal(arrOperatorTarget[29]);
			BigDecimal _27h = new BigDecimal(arrOperatorTarget[30]);
			BigDecimal _28h = new BigDecimal(arrOperatorTarget[31]);
			BigDecimal _29h = new BigDecimal(arrOperatorTarget[32]);
			BigDecimal _30h = new BigDecimal(arrOperatorTarget[33]);
			BigDecimal _31h = new BigDecimal(arrOperatorTarget[34]);		
			
			rtn = cgPlanService.setCGPlan(factoryName,productCategory,category,inout,
					_01h,_02h,_03h,_04h,_05h,_06h,_07h,_08h,_09h,_10h,_11h,_12h,_13h,_14h,_15h,_16h,_17h,
					_18h,_19h,_20h,_21h,_22h,_23h,_24h,_25h,_26h,_27h,_28h,_29h,_30h,_31h,userName);			
		}
		
		return rtn;
	}
	private int setOperatorInfo(String[] arrOperatorInfo) {
		int rtn = 0;
		if (arrOperatorInfo.length==10) {
			String factoryName = arrOperatorInfo[0];
			String processOperationName = arrOperatorInfo[1];
			String shiftName = arrOperatorInfo[2];
			String groupName = arrOperatorInfo[3];
			String operatorId = arrOperatorInfo[4];
			String operatorName = arrOperatorInfo[5];
			
			rtn = operatorInfoService.setOperatorInfo(factoryName,processOperationName,shiftName,groupName,operatorId,operatorName);			
		}
		
		return rtn;
	}
	private int setOperatorTarget(String[] arrOperatorTarget) {
		int rtn = 0;
		if (arrOperatorTarget.length==31) {
			String factoryName = arrOperatorTarget[0];
			String operatorId = arrOperatorTarget[1];
			String _total = arrOperatorTarget[2];
			String _00h = arrOperatorTarget[3];
			String _01h = arrOperatorTarget[4];
			String _02h = arrOperatorTarget[5];
			String _03h = arrOperatorTarget[6];
			String _04h = arrOperatorTarget[7];
			String _05h = arrOperatorTarget[8];
			String _06h = arrOperatorTarget[9];
			String _07h = arrOperatorTarget[10];
			String _08h = arrOperatorTarget[11];
			String _09h = arrOperatorTarget[12];
			String _10h = arrOperatorTarget[13];
			String _11h = arrOperatorTarget[14];
			String _12h = arrOperatorTarget[15];
			String _13h = arrOperatorTarget[16];
			String _14h = arrOperatorTarget[17];
			String _15h = arrOperatorTarget[18];
			String _16h = arrOperatorTarget[19];
			String _17h = arrOperatorTarget[20];
			String _18h = arrOperatorTarget[21];
			String _19h = arrOperatorTarget[22];
			String _20h = arrOperatorTarget[23];
			String _21h = arrOperatorTarget[24];
			String _22h = arrOperatorTarget[25];
			String _23h = arrOperatorTarget[26];
			
			rtn = operatorTargetService.setOperatorTarget(factoryName,operatorId,_total,_00h,_01h,_02h,_03h,_04h,_05h,_06h,_07h,_08h,_09h,_10h,_11h,_12h,_13h,_14h,_15h,_16h,_17h,_18h,_19h,_20h,_21h,_22h,_23h);			
		}
		
		return rtn;
	}
}

