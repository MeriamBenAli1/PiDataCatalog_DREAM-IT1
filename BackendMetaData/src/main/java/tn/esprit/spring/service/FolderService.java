package tn.esprit.spring.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.Folder;
import tn.esprit.spring.repositories.FolderRepository;

import java.util.List;

@Service
public class FolderService {

    private final FolderRepository folderRepository;

    @Autowired
    public FolderService(FolderRepository folderRepository) {
        this.folderRepository = folderRepository;
    }

    // Create operation
    public Folder createFolder(Folder folder) {

        return folderRepository.save(folder);
    }

    // Read operation
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    public Folder getFolderById(Long id) {
        return folderRepository.findById(id).orElse(null);
    }

    // Update operation
    public Folder updateFolder(Long id, Folder newFolderData) {
        Folder folder = folderRepository.findById(id).orElse(null);
        if (folder != null) {
            folder.setName(newFolderData.getName());
            folder.setDescription(newFolderData.getDescription());
            folder.setCreationDate(newFolderData.getCreationDate());
            folder.setCreator(newFolderData.getCreator());
            return folderRepository.save(folder);
        }
        return null;
    }

    // Delete operation
    public void deleteFolder(Long id) {
        folderRepository.deleteById(id);
    }
}
