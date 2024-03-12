package tn.esprit.spring.enities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Policy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long  idPolicy;

    private String nom;

    private String rules;

   /* @ManyToMany(mappedBy = "policys", cascade = CascadeType.ALL)
    private Set<MetaData> metadatas;*/
}
