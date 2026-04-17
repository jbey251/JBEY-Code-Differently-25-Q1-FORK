package com.codedifferently.lesson9.dataprovider;

import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class JBey2Provider extends DataProvider {
  public String getProviderName() {
    return "JBey2";
  }

  public Map<String, Class> getColumnTypeByName() {
    return Map.of(
        "column1", Float.class,
        "column2", String.class,
        "column3", Integer.class,
        "column4", Long.class,
        "column5", Boolean.class,
        "column6", Short.class,
        "column7", Double.class);
  }
}
