package si.feri.um.wha.dao;

import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Artikel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.feri.um.wha.models.Tip_artikla;


public interface ArtikelRepository extends CrudRepository<Artikel, Long> {

    @Query("select a from Artikel a where a.ID_artikel = :id")
    Artikel vrniDolocenArtikel(@Param("id") Long id);

    @Query("SELECT a FROM Artikel a WHERE (:tipArtikla IS NULL OR a.tip_artikla = :tipArtikla) AND (:prodajnaCena IS NULL OR a.prodajnaCena > :prodajnaCena)")
    Iterable<Artikel> poisciGledeNaCenoTip(
            @Param("tipArtikla") Tip_artikla tipArtikla,
            @Param("prodajnaCena") Double prodajnaCena
    );




}
