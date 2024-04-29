package tn.esprit.spring.enities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AuditLog implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdAuditLog;
    private String actionType;
    private String description;
    private String userIpAddress;
    private LocalDateTime actionDateTime;
    private  Boolean archived;
    @JsonIgnore
    @ManyToOne
    private User user;
}
