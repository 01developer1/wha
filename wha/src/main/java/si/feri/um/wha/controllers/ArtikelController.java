package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.ArtikelRepository;
import si.feri.um.wha.models.Artikel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/artikli")
public class ArtikelController {

    @Autowired
    private ArtikelRepository artikelDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

}
