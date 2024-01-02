package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.ZalogaRepository;
import si.feri.um.wha.models.Zaloga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.models.Zaposleni;

@RestController
@RequestMapping("/zaloge")
public class ZalogaController {

    @Autowired
    private ZalogaRepository zalogaDao;

    @GetMapping
    public Iterable<Zaloga> vrniZaloga(){
        return zalogaDao.findAll();
    }

    @PostMapping
    public Zaloga dodajZaloga(@RequestBody Zaloga zaloga){
        return zalogaDao.save(zaloga);
    }
}
