package tn.esprit.spring.enities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
public class MetaData implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTable;
    private String name; // This will now hold the file name without the extension
    private String source; // Added attribute to store the file name with extension
    private String description;
    private LocalDateTime creationDate;
    private Double size;
    private String creator;
    private String title;


    @Enumerated(EnumType.STRING)
    private Location location;
    @Enumerated(EnumType.STRING)
    private TypeFile type;


    @JsonIgnore
    @OneToMany(mappedBy = "parentDataTable", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<ColumnMetaData> schemas;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "folder")
    private Folder folder;


}