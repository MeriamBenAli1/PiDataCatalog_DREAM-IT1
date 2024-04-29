package tn.esprit.spring.service;

import tn.esprit.spring.enities.AuditLog;

import java.util.List;

public interface ISAuditLog {

    public List<AuditLog> getAllAuditLogs();
    List<AuditLog> findByUserId(Long userId);

    public void saveAuditLog(AuditLog auditLog);
    void archiveAudit(Long auditId);
    List<AuditLog> getArchivedAudits();
    void deleteAudit(Long auditId);
}
