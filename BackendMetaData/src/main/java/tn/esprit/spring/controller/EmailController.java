package tn.esprit.datacatalog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.datacatalog.Entities.EmailDetails;
import tn.esprit.datacatalog.Service.MailService;

import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:4200") // Utilisez "*" pour permettre à toutes les origines ou spécifiez une origine précise
@RestController
@RequestMapping("/api/mail")
public class EmailController {

    private final MailService emailService;

    @Autowired
    public EmailController(MailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody EmailDetails details) {
        emailService.sendEmail(details.getTo(), details.getSubject(), details.getBody());
        return ResponseEntity.ok("Email envoyé avec succès");
    }
}
