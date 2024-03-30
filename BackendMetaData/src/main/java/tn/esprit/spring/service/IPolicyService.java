package tn.esprit.spring.service;




import tn.esprit.spring.enities.Policy;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface IPolicyService {
    public List<Policy> retrieveAllPolicy();

    public Policy addPolicy(Policy p);
    void deletePolicy(long id);
    public Policy updatePolicy(long id, Policy updatedPolicy);
    public Policy getPolicyById(long id) ;
   List<Policy> savePolicyWithContent(String content) throws Exception;




    public Map<String, Float> calculatePolicyStatistics();
    }

