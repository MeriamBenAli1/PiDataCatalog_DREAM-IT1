package tn.esprit.datacatalog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.datacatalog.Entities.Policy;

@Repository
public interface IPolicyRepo extends JpaRepository<Policy, Long> {
}
