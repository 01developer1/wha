package si.feri.um.wha.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import si.feri.um.wha.models.Zaloga;

public interface ZalogaRepository extends CrudRepository<Zaloga, Long> {
}
