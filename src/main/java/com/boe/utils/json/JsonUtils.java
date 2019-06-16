package com.boe.utils.json;

import com.boe.utils.Utils;
import org.json.JSONArray;

import java.lang.reflect.Method;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonEncoding;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtils {

    public static <T>JSONArray toJsonList(List<T> list) {
        JSONArray array = new JSONArray();

        for (Object obj : list) {
            try {
                Method method = obj.getClass().getMethod("toJson");
                array.put(method.invoke(obj));
            } catch (Exception e) {
//                e.printStackTrace();
                String s = String.valueOf(obj);
                if (Utils.isNumeric(s)) {
                    array.put(String.valueOf(obj));
                } else {
                    array.put(obj);
                }
            }
        }

        return array;
    }
    
	protected static ObjectMapper mapper = new ObjectMapper();
	
	protected static JsonFactory factory = mapper.getJsonFactory();

	public void writeJSON(HttpServletResponse response, Object object) throws Exception{
		response.setContentType("text/html;charset=utf-8");
		JsonGenerator responseJsonGenerator = factory.createJsonGenerator(response.getOutputStream(), JsonEncoding.UTF8);
		responseJsonGenerator.writeObject(object);
	}

}
