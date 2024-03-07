package tn.esprit.spring.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.enities.Folder;
import tn.esprit.spring.service.FolderService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class FolderController {

    private FolderService folderService;

    @Autowired
    public FolderController(FolderService folderService) {
        this.folderService = folderService;
    }

    // Create operation
    @PostMapping("/createFolder")
    public Folder createFolder(@RequestParam("name") String name, @RequestParam("description") String description) {
        Folder folder = new Folder();
        folder.setName(name);
        folder.setDescription(description);
        return folderService.createFolder(folder);

    }

    // Read operation
    @GetMapping
    public ResponseEntity<List<Folder>> getAllFolders() {
        List<Folder> folders = folderService.getAllFolders();
        return new ResponseEntity<>(folders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Folder> getFolderById(@PathVariable Long id) {
        Folder folder = folderService.getFolderById(id);
        if (folder != null) {
            return new ResponseEntity<>(folder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update operation
    @PutMapping("/{id}")
    public ResponseEntity<Folder> updateFolder(@PathVariable Long id, @RequestBody Folder newFolderData) {
        Folder updatedFolder = folderService.updateFolder(id, newFolderData);
        if (updatedFolder != null) {
            return new ResponseEntity<>(updatedFolder, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete operation
    @DeleteMapping("folders/deleteFolder/{id}")
    public ResponseEntity<Void> deleteFolder(@PathVariable Long id) {
        folderService.deleteFolder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}