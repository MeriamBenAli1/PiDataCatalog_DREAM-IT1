package tn.esprit.spring.service;

import lombok.AllArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.apache.pdfbox.text.PDFTextStripperByArea;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.spring.enities.Policy;
import tn.esprit.spring.repositories.IpolicyRepo;


import java.io.File;
import java.io.InputStream;
import java.util.*;

@Service
@AllArgsConstructor
public class PolicyServiceImpl implements IPolicyService {
    @Autowired
    IpolicyRepo policyRepo;

    @Override
    public List<Policy> retrieveAllPolicy() {
        return policyRepo.findAll();
    }

    @Override
    public Policy addPolicy(Policy p) {
        return policyRepo.save(p);
    }

    @Override
    public void deletePolicy(long id) {
        policyRepo.deleteById(id);
    }


    @Override
    public Policy updatePolicy(long id, Policy updatedPolicy) {
        Policy existingPolicy = policyRepo.findById(id).orElse(null);
        if (existingPolicy != null) {
            try {
                existingPolicy.setNom(updatedPolicy.getNom());
                existingPolicy.setRules(updatedPolicy.getRules());
                Policy updated = policyRepo.save(existingPolicy);
                return updated;
            } catch (Exception e) {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public Policy getPolicyById(long id) {
        return policyRepo.findById(id).orElse(null);
    }
    //////////////////////////////////////EXtractionnnnnnnnn////////////////////


   /* @Override
    public List<Policy> savePolicyWithContent(String content) {
        List<Policy> savedPolicies = new ArrayList<>();

        // Supposons que le contenu est structuré ligne par ligne, alternant entre nom et règle
        String[] lines = content.split("\n");

        // Parcourir les lignes deux par deux, en supposant une alternance entre nom et règle
        for (int i = 0; i < lines.length; i += 2) {
            // S'assurer qu'il y a une paire nom/règle à traiter
            if (i + 1 < lines.length) {
                String nomPolitique = lines[i].trim(); // Le nom de la politique
                String rules = lines[i + 1].trim(); // Les règles associées

                // S'assurer que ni le nom ni les règles ne sont vides
                if (!nomPolitique.isEmpty() && !rules.isEmpty()) {
                    Policy policy = new Policy();
                    policy.setNom(nomPolitique);
                    policy.setRules(rules);

                    // Enregistrement dans la base de données
                    Policy savedPolicy = policyRepo.save(policy);
                    savedPolicies.add(savedPolicy);
                }
            }
        }

        return savedPolicies;
    }*/
 /*  @Override
   public List<Policy> savePolicyWithContent(String content) {
       List<Policy> savedPolicies = new ArrayList<>();

       // Split the content by lines
       String[] lines = content.split("\n");

       for (int i = 0; i < lines.length; i++) {
           String[] parts = lines[i].split(";", 2); // Split each line into two parts using the semicolon as a delimiter

           if (parts.length == 2) { // Ensure there are two parts: nom and rules
               String nomPolitique = parts[0].trim(); // The name of the policy
               String rules = parts[1].trim(); // The rules associated

               // Ensure neither the name nor the rules are empty
               if (!nomPolitique.isEmpty() && !rules.isEmpty()) {
                   Policy policy = new Policy();
                   policy.setNom(nomPolitique); // Set the name
                   policy.setRules(rules); // Set the rules

                   // Save the policy to the database
                   Policy savedPolicy = policyRepo.save(policy);
                   savedPolicies.add(savedPolicy);
               }
           }
       }

       return savedPolicies;
   }
*/
    //extraction
   @Override
   public List<Policy> savePolicyWithContent(String content) {
       List<Policy> savedPolicies = new ArrayList<>();

       // Split the content by lines
       String[] lines = content.split("\n");// Divise le contenu en lignes

       for (int i = 0; i < lines.length; i++) {
           String[] parts = lines[i].split(";", 2); //Divise chaque ligne en deux parties en utilisant le  ;
           if (parts.length == 2) { // Vérifie s'il y a deux parties dans la ligne (nom et règles).
               String nomPolitique = parts[0].trim(); // The name of the policy
               String rules = parts[1].trim(); // The rules associated, trimming the semicolon if it's there

               // Ensure neither the name nor the rules are empty
               if (!nomPolitique.isEmpty() && !rules.isEmpty()) {
                   Policy policy = new Policy();
                   policy.setNom(nomPolitique); // Set the name
                   policy.setRules(rules); // Set the rules without the semicolon

                   // Save the policy to the database
                   Policy savedPolicy = policyRepo.save(policy);
                   savedPolicies.add(savedPolicy);
               }
           }
       }

       return savedPolicies;
   }


    ////statttt
    @Override
    public Map<String, Float> calculatePolicyStatistics() {

        List<Policy> policies = policyRepo.findAll();
        Map<String, Integer> policyCounts = new HashMap<>();

        // Compter le nombre d'occurrences de chaque nom de policy
        for (Policy policy : policies) {
            String nom = policy.getNom();
            policyCounts.put(nom, policyCounts.getOrDefault(nom, 0) + 1);
        }

        // Calculer le pourcentage pour chaque nom de policy
        Map<String, Float> policyStatistics = new HashMap<>();
        int totalPolicies = policies.size();
        for (Map.Entry<String, Integer> entry : policyCounts.entrySet()) {
            String nom = entry.getKey();
            int count = entry.getValue();
            float percentage = ((float) count / totalPolicies) * 100;
            policyStatistics.put(nom, percentage);
        }

        return policyStatistics;
    }

}
