package si.feri.um.wha.controllers;

import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.NarociloRepository;
import si.feri.um.wha.models.Artikel;
import si.feri.um.wha.models.Narocilo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Zaposleni;

import java.util.*;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;


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


    @GetMapping("/tedensko/skupaj")
    public ResponseEntity<Double> getTedenSkupaj() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfWeek = today.with(DayOfWeek.MONDAY).atStartOfDay();
        LocalDateTime endOfToday = today.atTime(23, 59, 59);

        List<Narocilo> weeklyOrders = narociloDao.findNarocilaBetweenDates(startOfWeek, endOfToday);

        double total = weeklyOrders.stream()
                .mapToDouble(Narocilo::getCenaSkupaj) // Predpostavljam, da Narocilo ima metodo getCenaSkupaj
                .sum();

        return ResponseEntity.ok(total);
    }


    @GetMapping("/tedensko")
    public ResponseEntity<Map<String, Double>> getWeeklyIncome() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfWeek = today.with(DayOfWeek.MONDAY).atStartOfDay();
        LocalDateTime endOfToday = today.atTime(23, 59, 59);

        List<Narocilo> weeklyOrders = narociloDao.findNarocilaBetweenDates(startOfWeek, endOfToday);

        Map<String, Double> weeklyIncome = new LinkedHashMap<>(); // Uporabite LinkedHashMap za ohranjanje vrstnega reda
        for (LocalDate date = startOfWeek.toLocalDate(); !date.isAfter(today); date = date.plusDays(1)) {
            final LocalDate finalDate = date; // Končna spremenljivka za uporabo v lambda izrazu
            final DayOfWeek day = finalDate.getDayOfWeek();
            double dailyTotal = weeklyOrders.stream()
                    .filter(narocilo -> narocilo.getDatumVnosa().toLocalDate().equals(finalDate))
                    .mapToDouble(Narocilo::getCenaSkupaj)
                    .sum();
            weeklyIncome.put(day.getDisplayName(TextStyle.SHORT, Locale.getDefault()), dailyTotal);
        }

        System.out.println(weeklyIncome);
        return ResponseEntity.ok(weeklyIncome);
    }






    @PostMapping
    public Narocilo dodajNarocilo(@RequestBody Narocilo narocilo){
        ArrayList<Integer> artikli = narocilo.getArtikli();
        ArrayList<Integer> kolicine = narocilo.getSeznamKolicin();
        for(int i = 0; i<artikli.size();i++){
            int trenutniArtikel;
        }
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