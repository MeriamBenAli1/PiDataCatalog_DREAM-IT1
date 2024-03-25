package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.enities.Stat;

@Repository
public interface StatRepository extends JpaRepository<Stat,Long> {
}
