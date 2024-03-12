package tn.esprit.spring.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.spring.enities.Policy;


@Service
@Slf4j
public class ContentExtractorControl {

    private final IPolicyService policyService;

    // Injection du PolicyService via le constructeur
    @Autowired
    public ContentExtractorControl(IPolicyService policyService) {
        this.policyService = policyService;
    }

    public String extractContent(final MultipartFile multipartFile) {
        String text;

        try (final PDDocument document = PDDocument.load(multipartFile.getInputStream())) {
            final PDFTextStripper pdfStripper = new PDFTextStripper();
            text = pdfStripper.getText(document);
        } catch (final Exception ex) {
            log.error("Error parsing PDF", ex);
            text = "Error parsing PDF";
        }

        return text;
    }

    // Méthode pour extraire et sauvegarder le contenu dans la base de données
    public Policy extractAndSaveContent(final MultipartFile multipartFile) {
        String content = extractContent(multipartFile);
        if (!"Error parsing PDF".equals(content)) {
            // Créez une nouvelle instance de Policy avec le contenu extrait
            Policy policy = new Policy();
            // Ici, vous devez définir les champs nécessaires de l'entité Policy
            policy.setRules(content); // Par exemple, enregistrement du contenu extrait dans les règles
            // Enregistrer la nouvelle politique dans la base de données
            return policyService.addPolicy(policy);
        } else {
            // Gestion de l'erreur ou retour d'une valeur indiquant l'échec
            return null;
        }
    }
}
