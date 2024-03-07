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
public class Folder  implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFolder;
    private String name;
    private String description;
    private LocalDateTime creationDate;
    private String creator;

    // Changes
    @JsonIgnore
    @OneToMany(mappedBy = "folder", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<MetaData> tables;

    // Getters and setters
    public Long getIdFolder() {
        return idFolder;
    }

    public void setIdFolder(Long idFolder) {
        this.idFolder = idFolder;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }
}

