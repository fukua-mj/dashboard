package com.boe.idm.project.controller.echart;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boe.idm.project.model.DailyInfo;
import com.boe.idm.project.model.EchartParam;
import com.boe.idm.project.model.YieldParam;
import com.boe.idm.project.service.EchartService;
import com.boe.idm.project.service.echart.EchartOeeService;
import com.boe.idm.project.service.echart.EchartQualityService;
import com.boe.idm.project.service.echart.EchartWareHouseService;
import com.boe.utils.json.JsonUtils;
import com.boe.utils.special.MDLMachineOrder;

@RestController
@RequestMapping(value="/api/echart/oee")
public class OeeController extends JsonUtils{

	private static final Logger log = LoggerFactory.getLogger(OeeController.class);
	
	@Autowired
	private EchartOeeService oeeService;
	
	@Autowired
	private EchartService echartService;
	
	@RequestMapping("getMachineName")	
	public @ResponseBody List<String> getMachineName(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="processType",required=true) String machineType) throws Exception{
		List<Map<String, Object>> list = oeeService.getMachineName(machineType);
			
		List<String> listMachine = new ArrayList<>();
		listMachine.add("ALL");
		for (int i = 0; i < list.size(); i++) {
			listMachine.add(list.get(i).get("MACHINENAME").toString());
		}
		listMachine.add("设备别");
		
		return listMachine;
	}

	@RequestMapping("getMDLLineName")	
	public @ResponseBody List<String> getMDLLineName(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="processType",required=true) String machineType) throws Exception{
		List<Map<String, Object>> list = oeeService.getOpt_oeeMDLLineName(machineType);
			
		List<String> listMachine = new ArrayList<>();
		listMachine.add("ALL");
		for (int i = 0; i < list.size(); i++) {
			listMachine.add(list.get(i).get("MACHINENAME").toString());
		}
		listMachine.add("设备别");
		
		return listMachine;
	}		
	
	@RequestMapping(value="/oee")
	public void oee(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String processType = yieldParam.getProcesstype();
		String machinename = yieldParam.getLinename();	
		String deviceType = yieldParam.getDeviceType();
		List<Map<String, Object>> list;
		List<Map<String, Object>> listOeeRatio;
		if(!machinename.equals("ALL")){
			list = oeeService.getoeedata(shopName,processType,machinename);
			listOeeRatio = oeeService.getOeeRatio(shopName,machinename);//性能嫁动率和OEE
		}else {
			list=oeeService.getoeedata_ALL(processType);
			listOeeRatio = oeeService.getOeeRatio_ALL(shopName,processType);//性能嫁动率和OEE
		}
		
		List<Map<String, Object>> listDate=echartService.getProductionDate();	
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date		
		
		//横坐标
		String[] datestr=new String[16];
		StringBuffer xData=new StringBuffer();
		xData.append("[");
		for(int m=0;m<listDate.size();m++){
			String date=null;
			if(listDate.get(m).get("MONTH_2")!=null){
				date=listDate.get(m).get("MONTH_2").toString();
				datestr[0]=listDate.get(m).get("MONTH_2").toString();
			}
			if(!xData.toString().equals("[")){
				xData.append(",");
			}
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_1")!=null){
				date=listDate.get(m).get("MONTH_1").toString();
				datestr[1]=listDate.get(m).get("MONTH_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("MONTH_0")!=null){
				date=listDate.get(m).get("MONTH_0").toString();
				datestr[2]=listDate.get(m).get("MONTH_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			datestr[3]="";
			if(listDate.get(m).get("WEEK_3")!=null){
				date=listDate.get(m).get("WEEK_3").toString();
				datestr[4]=listDate.get(m).get("WEEK_3").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_2")!=null){
				date=listDate.get(m).get("WEEK_2").toString();
				datestr[5]=listDate.get(m).get("WEEK_2").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_1")!=null){
				date=listDate.get(m).get("WEEK_1").toString();
				datestr[6]=listDate.get(m).get("WEEK_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("WEEK_0")!=null){
				date=listDate.get(m).get("WEEK_0").toString();
				datestr[7]=listDate.get(m).get("WEEK_0").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			xData.append(",''");
			datestr[8]="";
			if(listDate.get(m).get("DAY_7")!=null){
				date=listDate.get(m).get("DAY_7").toString();
				datestr[9]=listDate.get(m).get("DAY_7").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_6")!=null){
				date=listDate.get(m).get("DAY_6").toString();
				datestr[10]=listDate.get(m).get("DAY_6").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_5")!=null){
				date=listDate.get(m).get("DAY_5").toString();
				datestr[11]=listDate.get(m).get("DAY_5").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_4")!=null){
				date=listDate.get(m).get("DAY_4").toString();
				datestr[12]=listDate.get(m).get("DAY_4").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_3")!=null){
				date=listDate.get(m).get("DAY_3").toString();
				datestr[13]=listDate.get(m).get("DAY_3").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_2")!=null){
				date=listDate.get(m).get("DAY_2").toString();
				datestr[14]=listDate.get(m).get("DAY_2").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
			if(listDate.get(m).get("DAY_1")!=null){
				date=listDate.get(m).get("DAY_1").toString();
				datestr[15]=listDate.get(m).get("DAY_1").toString();
			}
			xData.append(",");
			xData.append("'");
			xData.append(date);		
			xData.append("'");
		}
		xData.append("]");
		
		//LegendData 固定值
		String legendData="['设备CM','M/C','J/C','Holiday','Idle','PM','其它Down','工艺Down','设备Down','EN','Run','可稼动率','时间稼动率','性能稼动率','OEE']";
		
		String[] stateStr=new String[]{"设备CM","M/C","J/C","Holiday","IDLE","PM","其它Down","工艺Down","设备Down","EN","RUN","可稼动率","时间稼动率","性能稼动率","OEE"};
		
		String[] colName=new String[]{"MONTH_3","MONTH_2","MONTH_1","","WEEK_4","WEEK_3","WEEK_2","WEEK_1","","DAY_7","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1"};		
		

		
		StringBuffer CMData=new StringBuffer();
		CMData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[0])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							CMData.append("[");
							CMData.append(String.valueOf(j));
							CMData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									CMData.append(String.format("%.3f",dd).toString());
								}
								CMData.append(",");
								CMData.append("'");
								CMData.append(datestr[j]);
								CMData.append("']");
						}
					}
					CMData.append(",");						
				}
				break;
			}
			if(i==list.size()-1){
				CMData.append("[]");
			}
		}
		CMData.append("]");
		
		StringBuffer M_CData=new StringBuffer();
		M_CData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[1])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							M_CData.append("[");
							M_CData.append(String.valueOf(j));
							M_CData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									M_CData.append(String.format("%.3f",dd).toString());
								}
								M_CData.append(",");
								M_CData.append("'");
								M_CData.append(datestr[j]);
								M_CData.append("']");
						}
					}
					M_CData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				M_CData.append("[]");
			}
		}
		M_CData.append("]");
		
		StringBuffer J_CData=new StringBuffer();
		J_CData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[2])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							J_CData.append("[");
							J_CData.append(String.valueOf(j));
							J_CData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									J_CData.append(String.format("%.3f",dd).toString());
								}
								J_CData.append(",");
								J_CData.append("'");
								J_CData.append(datestr[j]);
								J_CData.append("']");
						}
					}
					J_CData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				J_CData.append("[]");
			}
		}
		J_CData.append("]");
		
		StringBuffer HolidayData=new StringBuffer();
		HolidayData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[3])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							HolidayData.append("[");
							HolidayData.append(String.valueOf(j));
							HolidayData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									HolidayData.append(String.format("%.3f",dd).toString());
								}
								HolidayData.append(",");
								HolidayData.append("'");
								HolidayData.append(datestr[j]);
								HolidayData.append("']");
						}
					}
					HolidayData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				HolidayData.append("[]");
			}
		}
		HolidayData.append("]");
		
		StringBuffer IDLEData=new StringBuffer();
		IDLEData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[4])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							IDLEData.append("[");
							IDLEData.append(String.valueOf(j));
							IDLEData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									IDLEData.append(String.format("%.3f",dd).toString());
								}
								IDLEData.append(",");
								IDLEData.append("'");
								IDLEData.append(datestr[j]);
								IDLEData.append("']");
						}
					}
					IDLEData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				IDLEData.append("[]");
			}
		}
		IDLEData.append("]");
		
		StringBuffer PMData=new StringBuffer();
		PMData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[5])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							PMData.append("[");
							PMData.append(String.valueOf(j));
							PMData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									PMData.append(String.format("%.3f",dd).toString());
								}
								PMData.append(",");
								PMData.append("'");
								PMData.append(datestr[j]);
								PMData.append("']");
						}
					}
					PMData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				PMData.append("[]");
			}
		}
		PMData.append("]");
		
		StringBuffer otherDownData=new StringBuffer();
		otherDownData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[6])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							otherDownData.append("[");
							otherDownData.append(String.valueOf(j));
							otherDownData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									otherDownData.append(String.format("%.3f",dd).toString());
								}
								otherDownData.append(",");
								otherDownData.append("'");
								otherDownData.append(datestr[j]);
								otherDownData.append("']");
						}
					}
					otherDownData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				otherDownData.append("[]");
			}
		}
		otherDownData.append("]");
		
		StringBuffer processDownData=new StringBuffer();
		processDownData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[7])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							processDownData.append("[");
							processDownData.append(String.valueOf(j));
							processDownData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									processDownData.append(String.format("%.3f",dd).toString());
								}
								processDownData.append(",");
								processDownData.append("'");
								processDownData.append(datestr[j]);
								processDownData.append("']");
						}
					}
					processDownData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				processDownData.append("[]");
			}
		}
		processDownData.append("]");
		
		StringBuffer eqpDownData=new StringBuffer();
		eqpDownData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[8])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							eqpDownData.append("[");
							eqpDownData.append(String.valueOf(j));
							eqpDownData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									eqpDownData.append(String.format("%.3f",dd).toString());
								}
								eqpDownData.append(",");
								eqpDownData.append("'");
								eqpDownData.append(datestr[j]);
								eqpDownData.append("']");
						}
					}
					eqpDownData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				eqpDownData.append("[]");
			}
		}
		eqpDownData.append("]");
		
		StringBuffer ENData=new StringBuffer();
		ENData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[9])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							ENData.append("[");
							ENData.append(String.valueOf(j));
							ENData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									ENData.append(String.format("%.3f",dd).toString());
								}
								ENData.append(",");
								ENData.append("'");
								ENData.append(datestr[j]);
								ENData.append("']");
						}
					}
					ENData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				ENData.append("[]");
			}
		}
		ENData.append("]");
		
		StringBuffer RUNData=new StringBuffer();
		RUNData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[10])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							RUNData.append("[");
							RUNData.append(String.valueOf(j));
							RUNData.append(",");
								if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									RUNData.append(String.format("%.3f",dd).toString());
								}
								RUNData.append(",");
								RUNData.append("'");
								RUNData.append(datestr[j]);
								RUNData.append("']");
						}
					}
					RUNData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				RUNData.append("[]");
			}
		}
		RUNData.append("]");
		
/*		StringBuffer timeRatioData=new StringBuffer();
		timeRatioData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[12])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							timeRatioData.append("[");
							timeRatioData.append(String.valueOf(j));
							timeRatioData.append(",");
								//if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									timeRatioData.append(String.format("%.3f",dd).toString());
								//}
								timeRatioData.append(",");
								timeRatioData.append("'");
								timeRatioData.append(datestr[j]);
								timeRatioData.append("']");
						}
					}
					else{
						timeRatioData.append("[");
						timeRatioData.append(String.valueOf(j));
						timeRatioData.append(",");
						timeRatioData.append(",'']");
					}
					timeRatioData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				timeRatioData.append("[]");
			}
		}
		timeRatioData.append("]");
		
		StringBuffer ableRatioData=new StringBuffer();
		ableRatioData.append("[");
		for(int i=0;i<list.size();i++){
			if(list.get(i).get("STATENAME").toString().equals(stateStr[13])){					
				for(int j=0;j<colName.length;j++){
					if(!colName[j].equals("")){
						if(list.get(i).get(colName[j])!=null){
							ableRatioData.append("[");
							ableRatioData.append(String.valueOf(j));
							ableRatioData.append(",");
								//if(!list.get(i).get(colName[j]).toString().equals("0")){
									double dd=Double.parseDouble(list.get(i).get(colName[j]).toString());
									ableRatioData.append(String.format("%.3f",dd).toString());
								//}
								ableRatioData.append(",");
								ableRatioData.append("'");
								ableRatioData.append(datestr[j]);
								ableRatioData.append("']");
						}
					}
					else{
						ableRatioData.append("[");
						ableRatioData.append(String.valueOf(j));
						ableRatioData.append(",");
						ableRatioData.append(",'']");
					}
					ableRatioData.append(",");
					
				}
				break;
			}
			if(i==list.size()-1){
				ableRatioData.append("[]");
			}
		}
		ableRatioData.append("]");*/
		
		//性能嫁动率和OEE ratio特殊逻辑
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_7","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1"};
		String[] arrDateFactory=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			if(!arrXdataColumn[i].equals("")){
				arrDateFactory[i]=listDateFactory.get(0).get(arrXdataColumn[i]).toString();
			}
			else{
				arrDateFactory[i]="";
			}
		}
		
		StringBuffer OEEData = new StringBuffer().append("[");
		StringBuffer properRatioData = new StringBuffer().append("[");
		StringBuffer timeRatioData = new StringBuffer().append("[");
		StringBuffer ableRatioData = new StringBuffer().append("[");
		for(int i=0;i<arrDateFactory.length;i++) {
			boolean isExist = false;
			for(int m=0;m<listOeeRatio.size();m++) {
				if (listOeeRatio.get(m).get("DATETYPE").toString().equals(DateType[i])) {
					if (listOeeRatio.get(m).get("FACTORYDATE").toString().equals(arrDateFactory[i])) {
						isExist = true;
						if (listOeeRatio.get(m).get("OEE")!=null) {
							OEEData.append("[");
							OEEData.append(String.valueOf(i));
							OEEData.append(",");
							OEEData.append(listOeeRatio.get(m).get("OEE").toString());
							OEEData.append(",'");
							OEEData.append(datestr[i]);
							OEEData.append("'],");
							properRatioData.append("[");
							properRatioData.append(String.valueOf(i));
							properRatioData.append(",");
							properRatioData.append(listOeeRatio.get(m).get("XINGNENGJIADONG").toString());
							properRatioData.append(",'");
							properRatioData.append(datestr[i]);
							properRatioData.append("'],");							
							timeRatioData.append("[");
							timeRatioData.append(String.valueOf(i));
							timeRatioData.append(",");
							timeRatioData.append(listOeeRatio.get(m).get("SHIJIANJIADONG").toString());
							timeRatioData.append(",'");
							timeRatioData.append(datestr[i]);
							timeRatioData.append("'],");							
							ableRatioData.append("[");
							ableRatioData.append(String.valueOf(i));
							ableRatioData.append(",");
							ableRatioData.append(listOeeRatio.get(m).get("KEJIADONG").toString());
							ableRatioData.append(",'");
							ableRatioData.append(datestr[i]);
							ableRatioData.append("'],");
							break;
						}
					}
				}
			}
			if (!isExist) {
				OEEData.append("[");
				OEEData.append(String.valueOf(i));
				OEEData.append(",");
				if (arrXdataColumn[i].equals("")) {
					OEEData.append(",'"+datestr[i]+"'],");
				}else {
					OEEData.append("0,'"+datestr[i]+"'],");
				}	
				
				properRatioData.append("[");
				properRatioData.append(String.valueOf(i));
				properRatioData.append(",");
				if (arrXdataColumn[i].equals("")) {
					properRatioData.append(",'"+datestr[i]+"'],");
				}else {
					properRatioData.append("0,'"+datestr[i]+"'],");
				}
				
				timeRatioData.append("[");
				timeRatioData.append(String.valueOf(i));
				timeRatioData.append(",");
				if (arrXdataColumn[i].equals("")) {
					timeRatioData.append(",'"+datestr[i]+"'],");
				}else {
					timeRatioData.append("0,'"+datestr[i]+"'],");
				}
				
				ableRatioData.append("[");
				ableRatioData.append(String.valueOf(i));
				ableRatioData.append(",");
				if (arrXdataColumn[i].equals("")) {
					ableRatioData.append(",'"+datestr[i]+"'],");
				}else {
					ableRatioData.append("0,'"+datestr[i]+"'],");
				}
			}
		}
		OEEData.append("]");
		properRatioData.append("]");	
		timeRatioData.append("]");
		ableRatioData.append("]");
		
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("todaydate", todayDate);
		result.put("legenddata", legendData.toString());
		result.put("CMData", CMData.toString());
		result.put("M_CData", M_CData.toString());
		result.put("J_CData", J_CData.toString());
		result.put("HolidayData", HolidayData.toString());
		result.put("IDLEData", IDLEData.toString());
		result.put("PMData", PMData.toString());
		result.put("otherDownData", otherDownData.toString());
		result.put("processDownData", processDownData.toString());
		result.put("eqpDownData", eqpDownData.toString());
		result.put("ENData", ENData.toString());
		result.put("RUNData", RUNData.toString());
		result.put("timeRatioData", timeRatioData.toString());
		result.put("ableRatioData", ableRatioData.toString());
		result.put("OEEData", OEEData.toString());
		result.put("properRatioData", properRatioData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/oeeByLineDifference")
	public void oeeByLineDifference(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam yieldParam) throws Exception {
		String shopName = yieldParam.getShopName();
		String processType = yieldParam.getProcesstype();
		String machinename = yieldParam.getLinename();	
		List<Map<String, Object>> listDateFactory = echartService.getDateFactory();
		List<Map<String, Object>> list = oeeService.getoeedataByLineDifference(shopName,processType);
		List<Map<String, Object>> listMachinename = oeeService.getOeeMachineName(shopName,processType);
		String machineNameLikeValue = "";
		if (!shopName.equals("MODULE")) {
			machineNameLikeValue = listMachinename.get(0).get("MACHINENAME").toString().substring(0,5)+"%";
		} else {
			if (processType.equals("A_LAMI")||processType.equals("OCA")||processType.equals("ASSY")) {
				machineNameLikeValue = listMachinename.get(0).get("MACHINENAME").toString().substring(0,5)+"%";
			} else {
				machineNameLikeValue = listMachinename.get(0).get("MACHINENAME").toString().substring(0,3)+"%";
			}
		}
		String yesterdayDate = listDateFactory.get(0).get("DAY_1").toString();
		List<Map<String, Object>> listOeeRatio = new ArrayList<Map<String,Object>>();
		listOeeRatio = oeeService.getOeeRatioByLineDifference(shopName,machineNameLikeValue,yesterdayDate);

		List<Map<String, Object>> listMachine = oeeService.getOpt_oeeMDLLineName(processType);
		
		List<Map<String, Object>> listDate=echartService.getProductionDate();	
		String todayDate=listDate.get(0).get("TODAY_5M").toString();//get today date
		
		
		//横坐标
		String[] arrXdata=new String[listMachine.size()];
		StringBuffer xData=new StringBuffer().append("[");
		for (int i = 0; i < listMachine.size(); i++) {
			xData.append("'"+listMachine.get(i).get("MACHINENAME").toString()+"',");
			arrXdata[i] = listMachine.get(i).get("MACHINENAME").toString();
		}
		xData.append("]");
		//LegendData 固定值
		String legendData="['设备CM','M/C','J/C','Holiday','Idle','PM','其它Down','工艺Down','设备Down','EN','Run','可稼动率','时间稼动率','性能稼动率','OEE']";
		
		String[] stateStr=new String[]{"设备CM","M/C","J/C","Holiday","IDLE","PM","其它Down","工艺Down","设备Down","EN","RUN","可稼动率","时间稼动率","性能稼动率","OEE"};
		
		String[] colName=new String[]{"MONTH_3","MONTH_2","MONTH_1","","WEEK_4","WEEK_3","WEEK_2","WEEK_1","","DAY_7","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1"};		
		

		
		StringBuffer CMData=new StringBuffer();
		CMData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			CMData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("设备CM")) {
						CMData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			CMData.append(",'"+arrXdata[i]+"'],");
		}
		CMData.append("]");
		
		StringBuffer M_CData=new StringBuffer();
		M_CData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			M_CData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("M/C")) {
						M_CData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			M_CData.append(",'"+arrXdata[i]+"'],");
		}
		M_CData.append("]");
		
		StringBuffer J_CData=new StringBuffer();
		J_CData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			J_CData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("J/C")) {
						J_CData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			J_CData.append(",'"+arrXdata[i]+"'],");
		}
		J_CData.append("]");
		
		StringBuffer HolidayData=new StringBuffer();
		HolidayData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			HolidayData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("Holiday")) {
						HolidayData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			HolidayData.append(",'"+arrXdata[i]+"'],");
		}
		HolidayData.append("]");
		
		StringBuffer IDLEData=new StringBuffer();
		IDLEData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			IDLEData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("IDLE")) {
						IDLEData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			IDLEData.append(",'"+arrXdata[i]+"'],");
		}
		IDLEData.append("]");
		
		StringBuffer PMData=new StringBuffer();
		PMData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			PMData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("PM")) {
						PMData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			PMData.append(",'"+arrXdata[i]+"'],");
		}
		PMData.append("]");
		
		StringBuffer otherDownData=new StringBuffer();
		otherDownData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			otherDownData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("其它Down")) {
						otherDownData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			otherDownData.append(",'"+arrXdata[i]+"'],");
		}
		otherDownData.append("]");
		
		StringBuffer processDownData=new StringBuffer();
		processDownData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			processDownData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("工艺Down")) {
						processDownData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			processDownData.append(",'"+arrXdata[i]+"'],");
		}
		processDownData.append("]");
		
		StringBuffer eqpDownData=new StringBuffer();
		eqpDownData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			eqpDownData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("设备Down")) {
						eqpDownData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			eqpDownData.append(",'"+arrXdata[i]+"'],");
		}
		eqpDownData.append("]");
		
		StringBuffer ENData=new StringBuffer();
		ENData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			ENData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("EN")) {
						ENData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			ENData.append(",'"+arrXdata[i]+"'],");
		}
		ENData.append("]");
		
		StringBuffer RUNData=new StringBuffer();
		RUNData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			RUNData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("RUN")) {
						RUNData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			RUNData.append(",'"+arrXdata[i]+"'],");
		}
		RUNData.append("]");
		
/*		StringBuffer timeRatioData=new StringBuffer();
		timeRatioData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			timeRatioData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("时间稼动率")) {
						timeRatioData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			timeRatioData.append(",'"+arrXdata[i]+"'],");
		}
		timeRatioData.append("]");
		
		StringBuffer ableRatioData=new StringBuffer();
		ableRatioData.append("[");
		for(int i=0;i<arrXdata.length;i++){
			ableRatioData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < list.size(); j++) {
				if (list.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					if (list.get(j).get("STATENAME").toString().equals("可稼动率")) {
						ableRatioData.append(list.get(j).get("DAY_1").toString());
						break;
					}
				}
			}
			ableRatioData.append(",'"+arrXdata[i]+"'],");
		}
		ableRatioData.append("]");*/
		
		//性能嫁动率和OEE ratio特殊逻辑
		String[] DateType=new String[]{"MONTH","MONTH","MONTH","MONTH","WEEK","WEEK","WEEK","WEEK","WEEK","DAY","DAY","DAY","DAY","DAY","DAY","DAY"};
		String[] arrXdataColumn=new String[]{"MONTH_2","MONTH_1","MONTH_0","","WEEK_3","WEEK_2","WEEK_1","WEEK_0","","DAY_7","DAY_6","DAY_5","DAY_4","DAY_3","DAY_2","DAY_1"};
		String[] arrDateFactory=new String[arrXdataColumn.length];
		for(int i=0;i<arrXdataColumn.length;i++){
			if(!arrXdataColumn[i].equals("")){
				arrDateFactory[i]=listDateFactory.get(0).get(arrXdataColumn[i]).toString();
			}
			else{
				arrDateFactory[i]="";
			}
		}
		
		StringBuffer OEEData = new StringBuffer().append("[");
		StringBuffer properRatioData = new StringBuffer().append("[");
		StringBuffer ableRatioData = new StringBuffer().append("[");
		StringBuffer timeRatioData = new StringBuffer().append("[");
		for(int i=0;i<arrXdata.length;i++){
			OEEData.append("["+String.valueOf(i)+",");
			properRatioData.append("["+String.valueOf(i)+",");
			ableRatioData.append("["+String.valueOf(i)+",");
			timeRatioData.append("["+String.valueOf(i)+",");
			for (int j = 0; j < listOeeRatio.size(); j++) {
				if (listOeeRatio.get(j).get("MACHINENAME").toString().equals(arrXdata[i])) {
					OEEData.append(listOeeRatio.get(j).get("OEE").toString());
					properRatioData.append(listOeeRatio.get(j).get("XINGNENGJIADONG").toString());
					ableRatioData.append(listOeeRatio.get(j).get("KEJIADONG").toString());
					timeRatioData.append(listOeeRatio.get(j).get("SHIJIANJIADONG").toString());
				}
			}
			OEEData.append(",'"+arrXdata[i]+"'],");
			properRatioData.append(",'"+arrXdata[i]+"'],");
			ableRatioData.append(",'"+arrXdata[i]+"'],");
			timeRatioData.append(",'"+arrXdata[i]+"'],");
		}
		OEEData.append("]");
		properRatioData.append("]");	
		ableRatioData.append("]");
		timeRatioData.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("todaydate", todayDate);
		result.put("legenddata", legendData.toString());
		result.put("CMData", CMData.toString());
		result.put("M_CData", M_CData.toString());
		result.put("J_CData", J_CData.toString());
		result.put("HolidayData", HolidayData.toString());
		result.put("IDLEData", IDLEData.toString());
		result.put("PMData", PMData.toString());
		result.put("otherDownData", otherDownData.toString());
		result.put("processDownData", processDownData.toString());
		result.put("eqpDownData", eqpDownData.toString());
		result.put("ENData", ENData.toString());
		result.put("RUNData", RUNData.toString());
		result.put("timeRatioData", timeRatioData.toString());
		result.put("ableRatioData", ableRatioData.toString());
		result.put("OEEData", OEEData.toString());
		result.put("properRatioData", properRatioData.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="getPrdMonitorHeatMap")
	public void getPrdMonitorHeatMap(HttpServletRequest request, HttpServletResponse response,
			@RequestBody YieldParam chartParam) throws Exception {
		String shopName = chartParam.getShopName();
		List<Map<String, Object>> list = oeeService.getPrdMonitorHeatMap(shopName);
		List<String> listLineName = oeeService.getPrdMonitorHeatMapLineName(shopName);
		
		// 横坐标
		List<String> lineType = new ArrayList<>();
		StringBuffer xData = new StringBuffer();
		if (shopName.equals("MODULE")) {
			lineType.add("OLB");
			lineType.add("BCH");
			lineType.add("A_LAMI");
			lineType.add("SCP");
			lineType.add("OCA1");
			lineType.add("OCA2");
			lineType.add("ACU");
			lineType.add("TGP");
			lineType.add("BRP");
			xData.append("['OLB','BCH','A_LAMI','SCP','OCA1','OCA2','ACU','TGP','BRP']");
		}else if (shopName.equals("EVEN")) {
			
		}else if (shopName.equals("EAC")) {
			
		}else if (shopName.equals("MODULE")) {
			
		}
		
		// 纵坐标
		StringBuffer yData = new StringBuffer().append("[");
		for (String lineName : listLineName) {
			yData.append("'");
			yData.append(lineName);
			yData.append("',");
		}
		yData.append("]");
		
		StringBuffer series = new StringBuffer().append("[");
		for (int i = 0; i < lineType.size(); i++) {
			for (int j = 0; j < listLineName.size(); j++) {
				series.append("[");
				series.append(i);
				series.append(",");
				
				series.append(j);
				series.append(",");
				
				for (int p = 0; p < list.size(); p++) {
					if (!lineType.get(i).contains("OCA")) {
						if (lineType.get(i).equals(list.get(p).get("PROCESSTYPE").toString())) {
							if (listLineName.get(j).equals(list.get(p).get("LINENAME").toString())) {
								series.append(list.get(p).get("EQP_ACT_TACTTIME_LOSS").toString()); //运营TT超标
								series.append(",");
								series.append(list.get(p).get("DOWNLOSS").toString()); //Down超标
								series.append(",");
								series.append(list.get(p).get("PMLOSS").toString()); //PM 超标
								series.append(",");
								series.append(list.get(p).get("PRDLOSS").toString());
								break;
							}
						}
					} else {
						if (list.get(p).get("PROCESSTYPE").toString().equals("OCA")) {
							String machineNumber = "";
							if (lineType.get(i).equals("OCA1")) {
								machineNumber = String.valueOf(Integer.parseInt(listLineName.get(j).substring(4))*2-1);
							} else {
								machineNumber = String.valueOf(Integer.parseInt(listLineName.get(j).substring(4))*2);
							}
							if (list.get(p).get("MACHINENAME").toString().contains(machineNumber)) {
								series.append(list.get(p).get("EQP_ACT_TACTTIME_LOSS").toString()); //运营TT超标
								series.append(",");
								series.append(list.get(p).get("DOWNLOSS").toString()); //Down超标
								series.append(",");
								series.append(list.get(p).get("PMLOSS").toString()); //PM 超标
								series.append(",");
								series.append(list.get(p).get("PRDLOSS").toString());
								break;
							}
						}
					}
				}
				
				series.append("],");
			}			
		}
		series.append("]");
		
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("xdata", xData.toString());
		result.put("ydata", yData.toString());
		result.put("series", series.toString());
		
		try {
			writeJSON(response, result);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
}
