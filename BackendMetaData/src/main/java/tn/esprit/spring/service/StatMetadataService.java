package tn.esprit.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.MetaData;
import tn.esprit.spring.repositories.MetaDataRepository;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StatMetadataService implements IStatMetadataService {
    @Autowired
    MetaDataRepository metaDataRepo;

    @Override
    public List<MetaData> retrieveAllMetaData() {
        return metaDataRepo.findAll();
    }

    @Override
    public Map<String, Float> calculateMetaDataStatistics() {
        List<MetaData> metaDataList = metaDataRepo.findAll();
        Map<String, Integer> metaDataCounts = new HashMap<>();

        if (metaDataList.isEmpty()) {
            return Collections.emptyMap();
        }

        // Compter le nombre d'occurrences de chaque nom de met
        for (MetaData metaData : metaDataList) {
            String name = metaData.getName();
            metaDataCounts.put(name, metaDataCounts.getOrDefault(name, 0) + 1);
        }

        // Calculer le pourcentage pour chaque nom de metdata
        Map<String, Float> metaDataStatistics = new HashMap<>();
        int totalMetaData = metaDataList.size();
        for (Map.Entry<String, Integer> entry : metaDataCounts.entrySet()) {
            String name = entry.getKey();
            int count = entry.getValue();
            float percentage = ((float) count / totalMetaData) * 100;
            metaDataStatistics.put(name, percentage);
        }

        return metaDataStatistics;
    }


}