package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.spring.enities.Folder;

@Repository
public interface FolderRepository extends JpaRepository<Folder, Long> {
    // You can add custom queries if needed
}
