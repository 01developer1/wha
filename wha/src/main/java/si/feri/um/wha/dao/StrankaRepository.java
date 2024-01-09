package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Stranka;

import java.util.List;

public interface StrankaRepository extends CrudRepository<Stranka, Long> {
    @Query("select s from Stranka s where s.ID_stranka = :id")
    Stranka vrniDolocenoStranko(@Param("id") Long id);

    @Query("SELECT s FROM Stranka s WHERE " +
            "(:naziv IS NULL OR s.naziv LIKE %:naziv%) " +
            "AND (:kraj IS NULL OR s.kraj = :kraj) " +
            "AND (:ulica IS NULL OR s.ulica = :ulica) " +
            "AND (:postnaSt IS NULL OR s.postnaSt = :postnaSt) " +
            "AND (:drzava IS NULL OR s.drzava = :drzava) " +
            "AND (:telefon IS NULL OR s.telefon = :telefon) " +
            "AND (:email IS NULL OR s.email = :email)")
    List<Stranka> poisceVseStrankePoKriteriju(
            @Param("naziv") String naziv,
            @Param("kraj") String kraj,
            @Param("ulica") String ulica,
            @Param("postnaSt") Integer postnaSt,
            @Param("drzava") String drzava,
            @Param("telefon") String telefon,
            @Param("email") String email
    );
}
