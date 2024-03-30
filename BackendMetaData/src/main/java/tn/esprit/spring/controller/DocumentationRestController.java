package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.enities.Documentation;
import tn.esprit.spring.service.IDocService;


import java.util.List;

@RestController // Utilisez uniquement @RestController ici
@RequestMapping("/api/Doc")
@CrossOrigin(origins = "http://localhost:4200")
public class DocumentationRestController {
    @Autowired
    IDocService docService;
    @GetMapping("/")
    public ResponseEntity<List<Documentation>> getAllDocuments() {
        List<Documentation> documents = docService.retrieveAllDoc();
        return ResponseEntity.ok().body(documents);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Documentation> getDocumentById(@PathVariable long id) {
        Documentation document = docService.getDocById(id);
        if (document != null) {
            return ResponseEntity.ok().body(document);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add-doc")
    public ResponseEntity<Documentation> addDocument(@RequestBody Documentation documentation) {
        Documentation newDoc = docService.addDoc(documentation);
        return ResponseEntity.ok().body(newDoc);
    }

    @PutMapping("/update-doc/{id}")
    public ResponseEntity<Documentation> updateDocument(@PathVariable long id, @RequestBody Documentation documentation) {
        Documentation updatedDoc = docService.updateDoc(id, documentation);
        if (updatedDoc != null) {
            return ResponseEntity.ok().body(updatedDoc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete-doc/{id}")
    public ResponseEntity<?> deleteDocument(@PathVariable long id) {
        try {
            docService.deleteDoc(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error deleting document with ID: " + id);
        }
    }
}