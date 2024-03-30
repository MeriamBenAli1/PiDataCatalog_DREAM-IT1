package tn.esprit.spring.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.hibernate.boot.Metadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.ColumnMetaData;
import tn.esprit.spring.enities.MetaData;
import tn.esprit.spring.repositories.ColumnRepository;
import tn.esprit.spring.repositories.MetaDataRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MetaDataService {
    @Autowired
    private MetaDataRepository tableRepository;
    @Autowired
    private ColumnRepository schemaRepository;
    @Autowired
    public MetaDataService(MetaDataRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    public List<MetaData> getAllDataTables() {
        return tableRepository.findAll();
    }

    public Optional<MetaData> getDataTableById(Long id) {
        return tableRepository.findById(id);
    }
    @Transactional
    public MetaData saveOrUpdateDataTable(MetaData dataTable) {
        if (dataTable.getIdTable() != null && tableRepository.existsById(dataTable.getIdTable())) {
            return tableRepository.save(dataTable); // Update existing
        } else {
            return tableRepository.save(dataTable); // Create new
        }
    }


    public Optional<MetaData> findById(Long id) {
        return tableRepository.findById(id);
    }
    public List<ColumnMetaData> getMetaDataForTable(Long tableId) {
        MetaData dataTable = tableRepository.findById(tableId)
                .orElseThrow(() -> new RuntimeException("MetaData not found with id " + tableId));
        return new ArrayList<>(dataTable.getSchemas());
    }

    public ColumnMetaData updateSchema(Long id, ColumnMetaData schemaDetails) {
        ColumnMetaData schema = schemaRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Schema not found for id: " + id));

        schema.setName(schemaDetails.getName());
        schema.setType(schemaDetails.getType());
        schema.setDescription(schemaDetails.getDescription());
        schema.setTags(schemaDetails.getTags());

        return schemaRepository.save(schema);
    }
    public void updateTags(Long idSchema, Set<String> tags) {
        ColumnMetaData schema = schemaRepository.findById(idSchema)
                .orElseThrow(() -> new EntityNotFoundException("Schema not found"));
        schema.setTags(tags);
        schemaRepository.save(schema);
    }
    @Transactional
    public ColumnMetaData addMetadata(Long tableId, ColumnMetaData column) {
        MetaData parentTable = tableRepository.findById(tableId)
                .orElseThrow(() -> new EntityNotFoundException("Table not found with id: " + tableId));
        column.setParentDataTable(parentTable); // Assuming ColumnMetaData has a setParentDataTable method to set its parent MetaData
        return schemaRepository.save(column);
    }
    public void updateDescription(Long tableId, String description) {
        MetaData dataTable = tableRepository.findById(tableId)
                .orElseThrow(() -> new RuntimeException("Table not found with id " + tableId));
        dataTable.setDescription(description);
        tableRepository.save(dataTable);
    }


}
