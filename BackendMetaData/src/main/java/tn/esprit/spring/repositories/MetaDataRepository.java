package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.enities.MetaData;

import java.util.Optional;

public interface MetaDataRepository extends JpaRepository<MetaData,Long> {
    Optional<MetaData> findByName(String name);
}