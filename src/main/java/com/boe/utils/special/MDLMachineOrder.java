package com.boe.utils.special;

import java.util.ArrayList;
import java.util.List;

public class MDLMachineOrder {
	private String[] arrMachineType = {"OLB","BCH","A_LAMI","SCP","OCA","ACU","TGP","BRP","ATP","ASSY","MCU","MBB","MPP","MBP","MAP","PCK"};
	private String[] OLB = {"7MCLN","7MECL","7MCOF","7MFOF","7MART","7MAOI","7MDSP","7MGMT","7MAMT","OLB"};
	private String[] BCH = {"7MBDP","7MLCC","BCH"};
	private String[] ALAMI = {"7MOAL"};
	private String[] SCP = {"7MLSC","7MLPC","SCP"};
	private String[] OCA = {"7MOCA","7MOCA"};
	private String[] ACU = {"7MOAC","7MOUV","ACU"};
	private String[] TGP = {"7MTFF","7MGMT","7MMOC","7MAFT","7MPFA","TGP"};
	private String[] BRP = {"7MRFA","7MPBD","BRP"};
	private String[] ATP = {"7MOAC","7MTFF","7MAFT","7MPFA","ATP"};
	private String[] ASSY = {"7MRFA","SCF"};
	private String[] MCU = {"7MMCU"};
	private String[] MBB = {"7MMBB"};
	private String[] MPP = {"7MMPP"};
	private String[] MBP = {"7MMBP"};
	private String[] MAP = {"7MMAP","7MMAP","7MMAP","7MMAP"};
	private String[] PCK = {"7MMAP01","7MMAP02","7MMAP03","7MMAP04","7MMBP","7MMBB","7MMPP"};
	
	private ArrayList<String[]> machineList=new ArrayList<String[]>();	
	
	public String[] getMDLMachineOrder(String machineType) {
		
		machineList.add(OLB);
		machineList.add(BCH);
		machineList.add(ALAMI);
		machineList.add(SCP);
		machineList.add(OCA);
		machineList.add(ACU);
		machineList.add(TGP);
		machineList.add(BRP);
		machineList.add(ATP);
		machineList.add(ASSY);
		machineList.add(MCU);
		machineList.add(MBB);
		machineList.add(MPP);
		machineList.add(MBP);
		machineList.add(MAP);
		machineList.add(PCK);
		
		for (int i = 0; i < arrMachineType.length; i++) {
			if (machineType.equals(arrMachineType[i])) {
				return machineList.get(i);
			}
		}
		
		return null;
	}
	
	private String[] arrLineName={"LINE00","LINE01","LINE02","LINE03","LINE04","LINE05","LINE06","LINE07","LINE08","LINE09","LINE10","LINE11","LINE12"};
	private String[] LINE00={"MCU"};
	private String[] LINE01={"OLB","OCA","ATP","SCF"};
	private String[] LINE02={"OLB","OCA","ATP","SCF"};
	private String[] LINE03={"OLB","OCA","ATP","SCF"};
	private String[] LINE04={"OLB","OCA","ATP","SCF"};
	private String[] LINE05={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE06={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE07={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE08={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE09={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE10={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE11={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	private String[] LINE12={"OLB","BCH","7MOAL","SCP","7MOCA","7MOCA","ACU","TGP","BRP"};
	
	public String[] getMDLLineMachineOrder(String lineName) {
	
		machineList.add(LINE00);
		machineList.add(LINE01);
		machineList.add(LINE02);
		machineList.add(LINE03);
		machineList.add(LINE04);
		machineList.add(LINE05);
		machineList.add(LINE06);
		machineList.add(LINE07);
		machineList.add(LINE08);
		machineList.add(LINE09);
		machineList.add(LINE10);
		machineList.add(LINE11);
		machineList.add(LINE12);
		
		for (int i = 0; i < arrLineName.length; i++) {
			if (lineName.equals(arrLineName[i])) {
				return machineList.get(i);
			}
		}
		
		return null;
		
	}
}
