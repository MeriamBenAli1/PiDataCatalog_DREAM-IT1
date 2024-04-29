package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.spring.enities.MetaData;

import java.util.List;
import java.util.Optional;

public interface MetaDataRepository extends JpaRepository<MetaData,Long> {
    Optional<MetaData> findByName(String name);
    @Query("SELECT DISTINCT t FROM MetaData t JOIN FETCH t.schemas")
    List<MetaData> findAllWithMetaData();
}