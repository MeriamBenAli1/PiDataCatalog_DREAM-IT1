package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.enities.Documentation;

@Repository
public interface IDocumentationRepo extends JpaRepository<Documentation, Long> {
}
