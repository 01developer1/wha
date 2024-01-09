package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Artikel;
import si.feri.um.wha.models.Narocilo;
import si.feri.um.wha.models.Stanje_narocila;
import si.feri.um.wha.models.Zaposleni;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public interface NarociloRepository extends CrudRepository<Narocilo, Long>{

    @Query("select a from Narocilo a where a.ID_narocilo = :id")
    Narocilo vrniDolocenoNarocilo(@Param("id") Long id);

    @Query("SELECT n FROM Narocilo n WHERE " +
            "(:cenaSkupaj IS NULL OR n.cenaSkupaj = :cenaSkupaj) " +
            "AND (:seznamKolicin IS NULL OR n.seznamKolicin = :seznamKolicin) " +
            "AND (:zaposlen IS NULL OR n.zaposlen = :zaposlen) " +
            "AND (:artikli IS NULL OR :artikli MEMBER OF n.artikli) " +
            "AND (:datumVnosa IS NULL OR n.datumVnosa = :datumVnosa) " +
            "AND (:rokPriprave IS NULL OR n.rokPriprave = :rokPriprave) " +
            "AND (:casPriprave IS NULL OR n.casPriprave = :casPriprave) " +
            "AND (:stanjeNarocila IS NULL OR n.stanjeNarocila = :stanjeNarocila)")
    Iterable<Narocilo> poisceVsaNarocilaPoKriteriju(
            @Param("cenaSkupaj") Double cenaSkupaj,
            @Param("seznamKolicin") ArrayList<Integer> seznamKolicin,
            @Param("zaposlen") Zaposleni zaposlen,
            @Param("artikli") List<Artikel> artikli,
            @Param("datumVnosa") LocalDateTime datumVnosa,
            @Param("rokPriprave") LocalDateTime rokPriprave,
            @Param("casPriprave") LocalDateTime casPriprave,
            @Param("stanjeNarocila") Stanje_narocila stanjeNarocila
    );
}
