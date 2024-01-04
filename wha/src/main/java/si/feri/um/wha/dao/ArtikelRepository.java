package si.feri.um.wha.dao;

import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Artikel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import si.feri.um.wha.models.Tip_artikla;


public interface ArtikelRepository extends CrudRepository<Artikel, Long> {

    @Query("select a from Artikel a where a.ID_artikel = :id")
    Artikel vrniDolocenArtikel(@Param("id") Long id);

    @Query("SELECT a FROM Artikel a WHERE " +
            "(:naziv IS NULL OR a.naziv LIKE %:naziv%) " +
            "AND (:kolicina IS NULL OR a.kolicina = :kolicina) " +
            "AND (:prodajna_cena IS NULL OR a.prodajnaCena > :prodajna_cena) " +
            "AND (:dobavna_cena IS NULL OR a.dobavnaCena = :dobavna_cena) " +
            "AND (:lokacijaArtikla IS NULL OR a.lokacijaArtikla = :lokacijaArtikla) " +
            "AND (:tipArtiklaEnum IS NULL OR a.tip_artikla = :tipArtiklaEnum)")
    Iterable<Artikel> poisceVseArtiklePoKriteriju(
            @Param("tipArtiklaEnum") Tip_artikla tipArtiklaEnum,
            @Param("naziv") String naziv,
            @Param("kolicina") Integer kolicina,
            @Param("prodajna_cena") Double prodajna_cena,
            @Param("dobavna_cena") Double dobavna_cena,
            @Param("lokacijaArtikla") String lokacijaArtikla
    );



}

