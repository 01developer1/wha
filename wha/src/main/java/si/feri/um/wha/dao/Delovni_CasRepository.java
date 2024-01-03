package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Delovni_Cas;
import si.feri.um.wha.models.Zaposleni;

public interface Delovni_CasRepository extends CrudRepository<Delovni_Cas, Long>{

    @Query("select d from Delovni_Cas d where d.ID_delovni_cas = :id")
    Delovni_Cas vrniDolocenDelovniCas(@Param("id") Long id);
}
