package tn.esprit.spring.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.Documentation;
import tn.esprit.spring.repositories.IDocumentationRepo;


import java.util.List;
@Service
@AllArgsConstructor
public class DocumentationServiceImpl implements IDocService {
    @Autowired
    IDocumentationRepo documentationRepo;
    @Override
    public List<Documentation> retrieveAllDoc() {
        return documentationRepo.findAll();
    }

    @Override
    public Documentation addDoc(Documentation d) {
        return documentationRepo.save(d);
    }

    @Override
    public void deleteDoc(long id) {
documentationRepo.deleteById(id);
    }

    @Override
    public Documentation updateDoc(long id, Documentation Doc) {
        Documentation existingDoc = documentationRepo.findById(id).orElse(null);
        if (existingDoc != null) {
            try {
                // Assuming `doc` contains the new description to be updated.
                existingDoc.setDescription(Doc.getDescription());

                Documentation updated = documentationRepo.save(existingDoc);
                return updated;
            } catch (Exception e) {
                // Log the exception for debugging.
                e.printStackTrace();
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public Documentation getDocById(long id) {
        return documentationRepo.findById(id).orElse(null);
    }
}
