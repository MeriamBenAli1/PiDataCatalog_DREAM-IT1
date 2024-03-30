package tn.esprit.spring.enities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PdfExtractedData {
    private String name;
    private String rules;

    // Constructor, getters, and setters
    public PdfExtractedData(String name, String rules) {
        this.name = name;
        this.rules = rules;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }
}
