package tn.esprit.spring.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.enities.AuditLog;
import tn.esprit.spring.enities.User;
import tn.esprit.spring.service.AuditLogService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/audit-logs")
public class AuditLogController {
    private final AuditLogService auditLogService;

    @Autowired
    public AuditLogController(AuditLogService auditLogService) {
        this.auditLogService = auditLogService;
    }

    @GetMapping
    public List<AuditLog> getAllAuditLogs() {
        return auditLogService.getAllAuditLogs();
    }
    @GetMapping("/users/{userId}/audits")
    public List<AuditLog> getAuditsByUserId(@PathVariable Long userId) {
        return auditLogService.findByUserId(userId);
    }

    @PostMapping("add/{userId}")
    public ResponseEntity<Void> saveAuditLog(@PathVariable Long userId, @RequestBody AuditLog auditLog) {
        User u = new User();
        u.setId(userId);
        auditLog.setUser(u);
        auditLogService.saveAuditLog(auditLog);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PutMapping("/archive/{auditId}")
    public void archiveAudit(@PathVariable Long auditId) {
        auditLogService.archiveAudit(auditId);
    }
    @DeleteMapping("/delete/{auditId}")
    public void deleteAudit(@PathVariable Long auditId) {
        auditLogService.deleteAudit(auditId);
    }
}

