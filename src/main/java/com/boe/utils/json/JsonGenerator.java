package com.boe.utils.json;

import com.boe.utils.Utils;
import org.json.JSONObject;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;

public interface JsonGenerator {

    default Object getValue(Field field, Object obj) {
        Method[] ms = obj.getClass().getMethods();
        String getMethodName = "get".concat(field.getName());
        for (int i=0; i<ms.length; i++) {
            if (ms[i].getName().equalsIgnoreCase(getMethodName)) {
                try {
                    return ms[i].invoke(obj);
                } catch (Exception e) {
                    break;
                }
            }
        }

        try {
            return field.get(obj);
        } catch (IllegalAccessException e) {
            return null;
        }
    }

    @SuppressWarnings("unchecked")
	default JSONObject toJson() {
        JSONObject obj = new JSONObject();

        Field[] fields = this.getClass().getDeclaredFields();
        for (Field field : fields) {
            JsonIgnore ignore = field.getAnnotation(JsonIgnore.class);
            if (ignore != null && ignore.ignore()) {
                continue;
            }

            field.setAccessible(true);
            try {
//                Object value = field.get(this);
                Object value = getValue(field, this);
                if (value == null) {
                    continue;
                }

                Class<?> cls = field.getType();
                if (cls.getClassLoader() != null) { //自定义Class
                    try {
                        Method method = cls.getMethod("toJson");
                        System.out.println(method.invoke(value));
                        obj.put(field.getName(), method.invoke(value));
                    } catch (Exception e) {
//                        e.printStackTrace();
                        obj.put(field.getName(), String.valueOf(value));
                    }
                } else { //系统自带Class
                    if (value instanceof List) {
                        obj.put(field.getName(), JsonUtils.toJsonList((List<? extends Object>) value));
                    } else {
                        String s = String.valueOf(value);
                        if (Utils.isNumeric(s) || value instanceof Boolean) {
                            obj.put(field.getName(), s);
                        } else {
                            obj.put(field.getName(), value);
                        }
                    }

//                    if (cls == List.class) {
//                        obj.put(field.getName(), JsonUtils.toJsonList((List<? extends Object>) value));
//                    } else if (cls == HashMap.class) {
//                        obj.put(field.getName(), value);
//                    } else {
//                        obj.put(field.getName(), String.valueOf(value));
//                    }
                }
//                System.out.println(field.getType());
//                System.out.println(field.getType().getClassLoader());
//                obj.put(field.getName(), String.valueOf(value));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return obj;
    }

}
