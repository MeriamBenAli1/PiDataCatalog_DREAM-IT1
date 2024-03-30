package tn.esprit.spring.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.spring.DTO.ContentResponseDto;
import tn.esprit.spring.service.ContentExtractorControl;
import tn.esprit.spring.service.IPolicyService;


import java.io.InputStream;
@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/extractor")
public class ContentExtractorBoundary {

    private final ContentExtractorControl contentExtractorControl;
    private final IPolicyService policyService;

    @Autowired
    public ContentExtractorBoundary(ContentExtractorControl contentExtractorControl, IPolicyService policyService) {
        this.contentExtractorControl = contentExtractorControl;
        this.policyService = policyService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<ContentResponseDto> classifyAndSave(@RequestParam("file") MultipartFile pdfFile) {
        try {
            String content = contentExtractorControl.extractContent(pdfFile);
            // Appel à la méthode pour sauvegarder les politiques extraites du contenu
            policyService.savePolicyWithContent(content);
            return ResponseEntity.ok(ContentResponseDto.builder().content(content).build());
        } catch (Exception e) {
            // Gestion d'erreur en cas de problème lors de l'extraction ou de la sauvegarde
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ContentResponseDto.builder()
                            .content("Erreur lors de l'extraction ou de la sauvegarde des politiques")
                            .build());
        }
    }
}