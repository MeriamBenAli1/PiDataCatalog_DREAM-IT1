package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.enities.MetaData;
import tn.esprit.spring.enities.Policy;
import tn.esprit.spring.enities.Stat;
import tn.esprit.spring.service.*;


import java.io.ByteArrayInputStream;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/api/Stat")
@CrossOrigin(origins = "http://localhost:4200")

public class StatController {

    @Autowired
    IStatServiceImp iStatServiceImp;

    @Autowired
    NotificationService notificationService;
    @Autowired
    StatMetadataService metaDataSevice;
    @Autowired
    PolicyServiceImpl policyService;

    @PostMapping("/add-Stat")
    public ResponseEntity<Stat> addStat(@RequestBody Stat stat) {
        Stat newDoc = iStatServiceImp.addStat(stat);

        // Check if the new Stat object is added successfully
        if (newDoc != null) {
            // Prepare email content
            String to = "ing.rima.ben.hmida@gmail.com";
            String subject = "Nouvelle Stat Ajouté";
            String text = "Nouveau Stat ajouté : " + newDoc.toString();

            // Send the email notification
            notificationService.sendEmail(to, subject, text);

            // Return the response with the newly added Stat object
            return ResponseEntity.ok().body(newDoc);
        } else {
            // Return an error response if the Stat object is not added successfully
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/get-policy")
    public List<Policy> getPolicy() {
        return policyService.retrieveAllPolicy();
    }
    @GetMapping("/policy/statistics")
    public Map<String, Float> getPolicyStatistics() {
        return policyService.calculatePolicyStatistics();
    }

    @GetMapping("/get-metadata")
    public List<MetaData> getMetaData() {
        return metaDataSevice.retrieveAllMetaData();
    }


    @GetMapping("/metadata/statistics")
    public ResponseEntity<Map<String, Float>> getMetaDataStatistics() {
        try {
            Map<String, Float> metaDataStatistics = metaDataSevice.calculateMetaDataStatistics();
            return new ResponseEntity<>(metaDataStatistics, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @Autowired
    ExportPDFService exportPDFService;


    /////pdffff
    @GetMapping(value = "/statistics/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getPolicyStatisticsPDF() {
        Map<String, Float> statistics = policyService.calculatePolicyStatistics();

        ByteArrayInputStream bis = ExportPDFService.statisticsPDFReport(statistics);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=policy_statistics.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }
}
