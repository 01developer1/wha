package si.feri.um.wha.controllers;


import si.feri.um.wha.dao.ZaposleniRepository;
import si.feri.um.wha.models.Zaposleni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/zaposleni")
public class ZaposleniController {
    @Autowired
    private ZaposleniRepository zaposleniDao;

    @GetMapping
    public Iterable<Zaposleni> vrniZaposleni(){
        return zaposleniDao.findAll();
    }

    @PostMapping
    public Zaposleni dodajZaposlenega(@RequestBody Zaposleni zaposleni){
        return zaposleniDao.save(zaposleni);
    }

}
