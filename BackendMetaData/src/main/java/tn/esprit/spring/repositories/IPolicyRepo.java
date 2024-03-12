package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.enities.Policy;


@Repository
public interface IPolicyRepo extends JpaRepository<Policy, Long> {
}
