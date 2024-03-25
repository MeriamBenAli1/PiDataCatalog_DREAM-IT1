package tn.esprit.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.spring.enities.Stat;
import tn.esprit.spring.repositories.StatRepository;

@Service
public class StatService implements IStatServiceImp{
    @Autowired
    StatRepository statRepository;
    @Override
    public Stat addStat(Stat p) {
        return statRepository.save(p);
    }
}
