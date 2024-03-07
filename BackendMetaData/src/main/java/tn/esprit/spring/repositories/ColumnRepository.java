package tn.esprit.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.spring.enities.ColumnMetaData;
import tn.esprit.spring.enities.MetaData;

public interface ColumnRepository extends JpaRepository<ColumnMetaData,Long> {
    void deleteByParentDataTable(MetaData fileInfo);
}
