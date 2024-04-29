package tn.esprit.spring.Aspect;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import tn.esprit.spring.enities.User;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import tn.esprit.spring.enities.AuditLog;

import tn.esprit.spring.service.AuditLogService;

import java.net.UnknownHostException;
import java.time.LocalDateTime;

@Aspect
@Component
@Slf4j
public class AuditAspect {
    @Autowired
    private AuditLogService auditLogService;
    @Before("!execution(* tn.esprit.spring.controller.*.get*(..)) && (execution(* tn.esprit.spring.controller.*.*(..)))")
    public void logMethodEntry(JoinPoint joinPoint) throws UnknownHostException {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

        User u = new User();
        u.setId(2L);
        AuditLog auditLog = new AuditLog();
        auditLog.setArchived(false);
        auditLog.setActionDateTime(LocalDateTime.now());
        String ipAddress = request.getHeader("X-FORWARDED-FOR");
        if (ipAddress == null) {
            ipAddress = request.getRemoteAddr();
        }
        auditLog.setUserIpAddress(ipAddress);
        auditLog.setActionType(request.getMethod());
        auditLog.setDescription(request.getRequestURI());
        auditLog.setUser(u);
        String name = joinPoint.getSignature().getName();
        log.info("In method " + name + " : ");
        auditLogService.saveAuditLog(auditLog);

    }

}

