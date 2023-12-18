package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.feri.um.wha.models.Narocilo;

public interface NarociloRepository extends CrudRepository<Narocilo, Long>{
}
