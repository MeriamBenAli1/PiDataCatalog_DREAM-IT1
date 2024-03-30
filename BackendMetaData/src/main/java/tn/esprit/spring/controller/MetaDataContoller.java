package tn.esprit.spring.controller;

import jakarta.persistence.EntityNotFoundException;
import org.apache.pdfbox.util.filetypedetector.FileType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.spring.enities.*;
import tn.esprit.spring.service.FileProcessService;
import tn.esprit.spring.service.MetaDataService;

import javax.xml.crypto.Data;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MetaDataContoller {
    @Autowired
    private FileProcessService fileProcessService;
    @Autowired
    private MetaDataService dataTableService;

    @Autowired
    public MetaDataContoller(MetaDataService dataTableService) {
        this.dataTableService = dataTableService;
    }

    @GetMapping("/getAllTables")
    public List<MetaData> getAllDataTables() {
        return dataTableService.getAllDataTables();
    }

    @GetMapping("/tables/{id}")
    public ResponseEntity<MetaData> getDataTableById(@PathVariable Long id) {
        return dataTableService.getDataTableById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping("tables/{tableId}/metadata")
    public ResponseEntity<ColumnMetaData> addMetadata(@PathVariable Long tableId, @RequestParam("name") String name, @RequestParam("description") String description, @RequestParam("type") String type) {
        ColumnMetaData column = new ColumnMetaData();
        column.setName(name);
        column.setType(type);
        column.setDescription(description);


        ColumnMetaData savedColumnMetaData = dataTableService.addMetadata(tableId, column);
        return ResponseEntity.ok(savedColumnMetaData);
    }


    @PostMapping("/tables")
    public MetaData createDataTable(@RequestBody MetaData dataTable) {
        return dataTableService.saveOrUpdateDataTable(dataTable);
    }

    @PutMapping("/tables/{id}")
    public ResponseEntity<MetaData> updateDataTable(@PathVariable Long id, @RequestBody MetaData dataTable) {
        dataTable.setIdTable(id); // Make sure the ID is set correctly
        MetaData updatedDataTable = dataTableService.saveOrUpdateDataTable(dataTable);
        return ResponseEntity.ok(updatedDataTable);
    }


    // Add other endpoints as needed
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,
                                             @RequestParam("description") String description, @RequestParam("location") Location location,
                                             @RequestParam("title") String title, @RequestParam("type") TypeFile typeF) {
        try {
            String message = fileProcessService.processFile(file, description, location, title, typeF); // Adjust your service method to accept description
            return ResponseEntity.ok().body(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Could not upload the file: " + e.getMessage());
        }
    }
    @GetMapping("/tables/{id}/columns")
    public ResponseEntity<List<ColumnMetaData>> getMetaDataForTable(@PathVariable Long id) {
        List<ColumnMetaData> schemas = dataTableService.getMetaDataForTable(id);
        return ResponseEntity.ok(schemas);
    }

    @PutMapping("/schemas/{id}")
    public ResponseEntity<ColumnMetaData> updateSchema(@PathVariable Long id, @RequestBody ColumnMetaData schema) {
        ColumnMetaData updatedSchema = dataTableService.updateSchema(id, schema);
        return new ResponseEntity<>(updatedSchema, HttpStatus.OK);
    }
    @PutMapping("/schemas/{idSchema}/tags")
    public ResponseEntity<?> updateSchemaTags(@PathVariable Long idSchema, @RequestBody Set<String> tags) {
        try {
            dataTableService.updateTags(idSchema, tags);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/tables/{tableId}/description")
    public ResponseEntity<?> updateTableDescription(@PathVariable Long tableId, @RequestBody String description) {
        try {
            dataTableService.updateDescription(tableId, description);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating description: " + e.getMessage());
        }
    }
}
