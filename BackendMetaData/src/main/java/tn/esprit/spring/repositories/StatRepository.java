package tn.esprit.stat.Reopsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.stat.Entities.Stat;
@Repository
public interface StatRepository extends JpaRepository<Stat,Long> {
}
