package com.boe.utils.special;


public class ExcelImportConfig {
	
	public final static int EXCEL_TYPE_KILLING = 0;
	
	public final static int EXCEL_TYPE_CG = 1;
	
	public final static int EXCEL_TYPE_OPERATORTARGET = 2;
	
	public final static int EXCEL_TYPE_OPERATORINFO = 3;
	
	public final static String[] EXCEL_HEADER_KILLING= new String[]{"FACTORYYEAR","FACTORYMONTH","FACTORYNAME","PRODUCTCATEGORY","DEFECTCODE","PNL_KILLING","UPDATEUSER"};

	public final static String[] EXCEL_HEADER_CG= new String[]{"工厂","产品类型","类别","投入产出",
			"DAY_01","DAY_02","DAY_03","DAY_04","DAY_05","DAY_06","DAY_07",
			"DAY_08","DAY_09","DAY_10","DAY_11","DAY_12","DAY_13","DAY_14",
			"DAY_15","DAY_16","DAY_17","DAY_18","DAY_19","DAY_20","DAY_21",
			"DAY_22","DAY_23","DAY_24","DAY_25","DAY_26","DAY_27","DAY_28",
			"DAY_29","DAY_30","DAY_31"};
	
	public final static String[] EXCEL_HEADER_OPERATORTARGET= new String[]{"工厂","工号","TARGET_TOTAL","TARGET_00H","TARGET_01H","TARGET_02H","TARGET_03H","TARGET_04H",
			"TARGET_05H","TARGET_06H","TARGET_07H","TARGET_08H","TARGET_09H","TARGET_10H","TARGET_11H",
			"TARGET_12H","TARGET_13H","TARGET_14H","TARGET_15H","TARGET_16H","TARGET_17H","TARGET_18H",
			"TARGET_19H","TARGET_20H","TARGET_21H","TARGET_22H","TARGET_23H","Reserved1","Reserved2","Reserved3","lastUpdateTime"};

	public final static String[] EXCEL_HEADER_OPERATORINFO= new String[]{"工厂","站点","班别","组别","工号","姓名","Reserved1","Reserved2","Reserved3","lastUpdateTime"};



}
