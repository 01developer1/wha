package si.feri.um.wha.controllers;

import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.NarociloRepository;
import si.feri.um.wha.models.Artikel;
import si.feri.um.wha.models.Narocilo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Zaposleni;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/narocila")
public class NarociloController {

    @Autowired
    private NarociloRepository narociloDao;

    @GetMapping
    public Iterable<Narocilo> vrniNarocilo(){
        return narociloDao.findAll();
    }

    @GetMapping("/{ID_narocilo}")
    public Narocilo vrniDolocenoNarocilo(@PathVariable(name = "ID_narocilo") Long ID_narocilo){
        return narociloDao.vrniDolocenoNarocilo(ID_narocilo);
    }

    @PostMapping
    public Narocilo dodajNarocilo(@RequestBody Narocilo narocilo){
        return narociloDao.save(narocilo);
    }

    @DeleteMapping("/izbrisi/{ID_narocilo}")
    public ResponseEntity<String> izbrisiNarocilo(@PathVariable(name = "ID_narocilo") Long ID_narocilo) throws Exception {
        narociloDao.deleteById(ID_narocilo);
        return ResponseEntity.ok("Uspesno izbrisano narocilo.");
    }

    @PostMapping("/dodaj")
    public ResponseEntity<String> dodajNarocila(@RequestBody List<Narocilo> narocila) {
        Iterable<Narocilo> savedNarocila = narociloDao.saveAll(narocila);
        return ResponseEntity.ok("Uspesno dodana naročila.");
    }

    @PutMapping("/posodobi/{ID_narocilo}")
    public ResponseEntity<String> posodobiNarocilo(@PathVariable(name = "ID_narocilo") Long ID_narocilo, @RequestBody Narocilo updatedNarocilo) {
        Narocilo existingNarocilo = narociloDao.vrniDolocenoNarocilo(ID_narocilo);

        if (existingNarocilo == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedNarocilo.getCenaSkupaj() != 0.0) {
            existingNarocilo.setCenaSkupaj(updatedNarocilo.getCenaSkupaj());
        }
        if (updatedNarocilo.getSeznamKolicin() != null) {
            existingNarocilo.setSeznamKolicin(updatedNarocilo.getSeznamKolicin());
        }
        if (updatedNarocilo.getZaposlen() != null) {
            existingNarocilo.setZaposlen(updatedNarocilo.getZaposlen());
        }
        if (updatedNarocilo.getArtikli() != null) {
            existingNarocilo.setArtikli(updatedNarocilo.getArtikli());
        }
        if (updatedNarocilo.getDatumVnosa() != null) {
            existingNarocilo.setDatumVnosa(updatedNarocilo.getDatumVnosa());
        }
        if (updatedNarocilo.getRokPriprave() != null) {
            existingNarocilo.setRokPriprave(updatedNarocilo.getRokPriprave());
        }
        if (updatedNarocilo.getCasPriprave() != null) {
            existingNarocilo.setCasPriprave(updatedNarocilo.getCasPriprave());
        }
        if (updatedNarocilo.getStanjeNarocila() != null) {
            existingNarocilo.setStanjeNarocila(updatedNarocilo.getStanjeNarocila());
        }

        narociloDao.save(existingNarocilo);

        return ResponseEntity.ok("Naročilo uspešno posodobljeno.");
    }

}