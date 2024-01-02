package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.NarociloRepository;
import si.feri.um.wha.models.Narocilo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Zaposleni;

@RestController
@RequestMapping("/narocila")
public class NarociloController {

    @Autowired
    private NarociloRepository narociloDao;

    @GetMapping
    public Iterable<Narocilo> vrniNarocilo(){
        return narociloDao.findAll();
    }

    @PostMapping
    public Narocilo dodajNarocilo(@RequestBody Narocilo narocilo){
        return narociloDao.save(narocilo);
    }
}
