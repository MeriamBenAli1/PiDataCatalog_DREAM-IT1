package tn.esprit.spring.service;
import org.webjars.NotFoundException;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.AuditLog;
import tn.esprit.spring.repositories.AuditLogRepo;

import java.util.List;

@Service
public class AuditLogService implements ISAuditLog{

    private final AuditLogRepo auditLogRepository;

    @Autowired
    public AuditLogService(AuditLogRepo auditLogRepository) {
        this.auditLogRepository = auditLogRepository;
    }

    public List<AuditLog> getAllAuditLogs() {
        return auditLogRepository.findAll();
    }

    @Override
    public List<AuditLog> findByUserId(Long userId) {
        return auditLogRepository.findByUserId(userId);

    }

    @Transactional
    public void archiveAudit(Long auditId) {
        AuditLog auditLog = auditLogRepository.findById(auditId)
                .orElseThrow(() -> new NotFoundException("Audit log not found with id: " + auditId));
        auditLog.setArchived(true);
        auditLogRepository.save(auditLog);
    }

    @Override
    public List<AuditLog> getArchivedAudits() {
        return auditLogRepository.findByArchived(true);
    }

    @Override
    public void deleteAudit(Long auditId) {
        AuditLog auditLog = auditLogRepository.findById(auditId)
                .orElseThrow(() -> new IllegalArgumentException("Audit with id " + auditId + " not found"));

        auditLogRepository.delete(auditLog);
    }

    public void saveAuditLog(AuditLog auditLog) {
        auditLogRepository.save(auditLog);
    }
}