package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Artikel;
import si.feri.um.wha.models.Narocilo;

public interface NarociloRepository extends CrudRepository<Narocilo, Long>{

    @Query("select a from Narocilo a where a.ID_narocilo = :id")
    Narocilo vrniDolocenoNarocilo(@Param("id") Long id);
}
