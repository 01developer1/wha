package si.feri.um.wha.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import si.feri.um.wha.models.Zaposleni;

import java.util.List;

public interface ZaposleniRepository extends CrudRepository<Zaposleni, Long> {
}