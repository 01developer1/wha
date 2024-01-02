package si.feri.um.wha.controllers;

import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.ArtikelRepository;
import si.feri.um.wha.models.Artikel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Tip_artikla;


@RestController
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



    @GetMapping("/search") //vrne Artikle,ki imajo enak tip in ceno visjo od vnesene
    public Iterable<Artikel> vrniArtikleCenaTip(
            @RequestParam(name = "tipArtikla", required = false) String tipArtikla,
            @RequestParam(name = "prodajnaCena", required = false) Double prodajnaCena
    ) {
        Tip_artikla tipArtiklaEnum = (tipArtikla != null) ? Tip_artikla.valueOf(tipArtikla) : null;
        return artikelDao.poisciGledeNaCenoTip(tipArtiklaEnum, prodajnaCena);
    }






}
