package si.feri.um.wha.dao;

import si.feri.um.wha.models.Artikel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface ArtikelRepository extends CrudRepository<Artikel, Long> {

}
