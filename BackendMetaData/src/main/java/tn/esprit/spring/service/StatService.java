package tn.esprit.stat.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.stat.Entities.Stat;
import tn.esprit.stat.Reopsitory.StatRepository;
@Service
public class StatService implements IStatServiceImp{
    @Autowired
    StatRepository statRepository;
    @Override
    public Stat addStat(Stat p) {
        return statRepository.save(p);
    }
}
