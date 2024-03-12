package tn.esprit.datacatalog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.datacatalog.Entities.Documentation;
@Repository
public interface IDocumentationRepo extends JpaRepository<Documentation, Long> {
}
