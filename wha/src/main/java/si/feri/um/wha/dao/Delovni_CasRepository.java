package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.feri.um.wha.models.Delovni_Cas;

public interface Delovni_CasRepository extends CrudRepository<Delovni_Cas, Long>{
}
