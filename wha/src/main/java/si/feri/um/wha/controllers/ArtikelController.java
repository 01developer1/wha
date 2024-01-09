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

        // Dodaj if stavek za preverjanje TIP_Artikla
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
            @RequestParam(name = "kolicinaMin", required = false) Integer kolicinaMin,
            @RequestParam(name = "kolicinaMax", required = false) Integer kolicinaMax,
            @RequestParam(name = "prodajna_cenaMin", required = false) Double prodajna_cenaMin,
            @RequestParam(name = "prodajna_cenaMax", required = false) Double prodajna_cenaMax,
            @RequestParam(name = "dobavna_cenaMin", required = false) Double dobavna_cenaMin,
            @RequestParam(name = "dobavna_cenaMax", required = false) Double dobavna_cenaMax,
            @RequestParam(name = "lokacija_artikla", required = false) String lokacija_artikla,
            @RequestParam(name = "tipArtikla", required = false) String tipArtikla
    ) {
        Tip_artikla tipArtiklaEnum = (tipArtikla != null) ? Tip_artikla.valueOf(tipArtikla) : null;
        return artikelDao.poisceVseArtiklePoKriteriju(tipArtiklaEnum, naziv, kolicinaMin, kolicinaMax, prodajna_cenaMin, prodajna_cenaMax, dobavna_cenaMin, dobavna_cenaMax, lokacija_artikla);
    }

    @PostMapping("/dodaj")
    public ResponseEntity<String> dodajArtikle(@RequestBody List<Artikel> artikli) {
        Iterable<Artikel> savedArtikli = artikelDao.saveAll(artikli);
        return ResponseEntity.ok("Uspesno dodani artikli.");
    }

    @PutMapping("/posodobi/{ID_artikla}")
    public ResponseEntity<String> posodobiArtikel(@PathVariable(name = "ID_artikla") Long ID_artikel, @RequestBody Artikel updatedArtikel) {
        Artikel existingArtikel = artikelDao.vrniDolocenArtikel(ID_artikel);

        if (existingArtikel == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedArtikel.getNaziv() != null) {
            existingArtikel.setNaziv(updatedArtikel.getNaziv());
        }
        if (updatedArtikel.getKolicina() != 0) {
            existingArtikel.setKolicina(updatedArtikel.getKolicina());
        }
        if (updatedArtikel.getProdajnaCena() != 0.0) {
            existingArtikel.setProdajnaCena(updatedArtikel.getProdajnaCena());
        }
        if (updatedArtikel.getDobavnaCena() != 0.0) {
            existingArtikel.setDobavnaCena(updatedArtikel.getDobavnaCena());
        }
        if (updatedArtikel.getLokacijaArtikla() != null) {
            existingArtikel.setLokacijaArtikla(updatedArtikel.getLokacijaArtikla());
        }
        if (updatedArtikel.getTip_artikla() != null) {
            existingArtikel.setTip_artikla(updatedArtikel.getTip_artikla());
        }

        artikelDao.save(existingArtikel);

        return ResponseEntity.ok("Artikel uspešno posodobljen.");
    }



}
