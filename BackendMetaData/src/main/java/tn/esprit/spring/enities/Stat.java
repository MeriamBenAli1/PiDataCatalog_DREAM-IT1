package tn.esprit.spring.enities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Stat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idStat;

    private String nomStat; // Correspond à nomStat côté frontend
    private String Description; // Correspond à Description côté frontend
    private Choix choix;


}
