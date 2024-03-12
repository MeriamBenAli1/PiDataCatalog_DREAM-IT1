package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*; // Importation optimisée
import org.springframework.web.multipart.MultipartFile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;



import java.io.ByteArrayInputStream;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import tn.esprit.spring.enities.Policy;
import tn.esprit.spring.service.ExportPDFService;
import tn.esprit.spring.service.IDocService;
import tn.esprit.spring.service.IPolicyService;
import tn.esprit.spring.service.MailService;

import java.io.ByteArrayOutputStream;
import java.util.List;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController // Utilisez uniquement @RestController ici
@RequestMapping("/api/policy")
@CrossOrigin(origins = "http://localhost:4200") // Pas besoin de ** à la fin
public class PolicyRestController {
    @Autowired
    IDocService docService;
    @Autowired
    private ExportPDFService ExportPolicyService; // Assurez-vous d'injecter le service de PDF

    //poiiiiiiiiiiiccccccccccccyyyyyyyyyy
    @Autowired
    private IPolicyService policyService; // Bonne pratique d'utiliser 'private'
    @Autowired
    private MailService mailService;
    @PostMapping("/add-policy")
    public Policy addPolicy(@RequestBody Policy policy) {
        Policy newPolicy = policyService.addPolicy(policy);

        // Préparez les détails de l'email
        String to = "abrarbouslahi100@gmail.com"; // Remplacez par une adresse email valide
        String subject = "New Policy Added";
        String text = "abrarrrr: " + newPolicy.toString();

        // Envoyez l'email
        mailService.sendEmail(to, subject, text);

        // Retournez la nouvelle politique
        return newPolicy;}
    @GetMapping("/get-policy")
    public List<Policy> getPolicy() {
        return policyService.retrieveAllPolicy();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePolicy(@PathVariable Long id) {
        policyService.deletePolicy(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/update-policy/{id}")
    public Policy updatePolicy(@PathVariable long id, @RequestBody Policy updatedPolicy) {
        return policyService.updatePolicy(id, updatedPolicy);
    }
    @GetMapping("/api/policy/{id}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable long id) {
        Policy policy = policyService.getPolicyById(id);
        if (policy != null) {
            return ResponseEntity.ok(policy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    /////////////pdfff//////
    @GetMapping(value = "/export/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> exportPoliciesToPDF() {
        List<Policy> policies = policyService.retrieveAllPolicy(); // Récupère vos policies

        ByteArrayInputStream bis = ExportPolicyService.policiesPDFReport(policies);

        var headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=policies.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }
///////////Stattt
@GetMapping("/policy/statistics")
public Map<String, Float> getPolicyStatistics() {
    return policyService.calculatePolicyStatistics();
}


}

