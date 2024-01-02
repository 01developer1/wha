package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.ArtikelRepository;
import si.feri.um.wha.models.Artikel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Zaposleni;

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

}
