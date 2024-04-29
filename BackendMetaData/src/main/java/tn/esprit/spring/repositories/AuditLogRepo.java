package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.enities.AuditLog;
import tn.esprit.spring.enities.ColumnMetaData;

import java.util.List;

public interface AuditLogRepo extends JpaRepository<AuditLog,Long> {
    List<AuditLog> findByUserId(Long id);
    List<AuditLog> findByArchived(boolean archived);
}
