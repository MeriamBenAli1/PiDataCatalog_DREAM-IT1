package tn.esprit.spring.service;

import tn.esprit.spring.enities.MetaData;

import java.util.List;
import java.util.Map;

public interface IStatMetadataService {
    public List<MetaData> retrieveAllMetaData();


    public Map<String, Float> calculateMetaDataStatistics();
}
