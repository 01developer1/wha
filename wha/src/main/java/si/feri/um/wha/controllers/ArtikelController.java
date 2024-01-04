package si.feri.um.wha.controllers;

import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.ArtikelRepository;
import si.feri.um.wha.models.Artikel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Tip_artikla;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/artikli")
public class ArtikelController {

    @Autowired
    private ArtikelRepository artikelDao;

    @GetMapping
    public Iterable<Artikel> vrniArtikel(){
        return artikelDao.findAll();
    }

    @PostMapping
    public Artikel dodajArtikel(@RequestBody Artikel artikel){
        return artikelDao.save(artikel);
    }

    @GetMapping("/{ID_artikla}")
    public Artikel vrniDolocenArtikel(@PathVariable(name = "ID_artikla") Long ID_artikel){
        return artikelDao.vrniDolocenArtikel(ID_artikel);
    }

    @DeleteMapping("/izbrisi/{ID_artikla}")
    public ResponseEntity<String> izbrisiArtikel(@PathVariable(name = "ID_artikla") Long ID_artikel) throws Exception {
        artikelDao.deleteById(ID_artikel);
        return ResponseEntity.ok("Uspesno izbrisan artikel.");
    }

    @GetMapping("/search")
    public Iterable<Artikel> vrniArtikleFilter(
            @RequestParam(name = "naziv", required = false) String naziv,
            @RequestParam(name = "kolicina", required = false) Integer kolicina,
            @RequestParam(name = "prodajna_cena", required = false) Double prodajna_cena,
            @RequestParam(name = "dobavna_cena", required = false) Double dobavna_cena,
            @RequestParam(name = "lokacija_artikla", required = false) String lokacija_artikla,
            @RequestParam(name = "tipArtikla", required = false) String tipArtikla
    ) {
        Tip_artikla tipArtiklaEnum = (tipArtikla != null) ? Tip_artikla.valueOf(tipArtikla) : null;
        return artikelDao.poisceVseArtiklePoKriteriju(tipArtiklaEnum, naziv, kolicina, prodajna_cena, dobavna_cena, lokacija_artikla);
    }

    @PostMapping("/dodaj")
    public ResponseEntity<String> dodajArtikle(@RequestBody List<Artikel> artikli) {
        Iterable<Artikel> savedArtikli = artikelDao.saveAll(artikli);
        return ResponseEntity.ok("Uspesno dodani artikli.");
    }





}
