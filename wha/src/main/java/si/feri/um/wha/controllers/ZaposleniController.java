package si.feri.um.wha.controllers;


import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.ZaposleniRepository;
import si.feri.um.wha.models.Artikel;
import si.feri.um.wha.models.Tip_artikla;
import si.feri.um.wha.models.Zaposleni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
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

    @GetMapping("/{ID_zaposleni}")
    public Zaposleni vrniDolocenegaZaposlenega(@PathVariable(name = "ID_zaposleni") Long ID_zaposleni){
        return zaposleniDao.vrniDolocenegaZaposlenega(ID_zaposleni);
    }

    @DeleteMapping("/izbrisi/{ID_zaposleni}")
    public ResponseEntity<String> izbrisiZaposlenega(@PathVariable(name = "ID_zaposleni") Long ID_zaposleni) throws Exception {
        zaposleniDao.deleteById(ID_zaposleni);
        return ResponseEntity.ok("Uspesno izbrisan zaposleni.");
    }


}
