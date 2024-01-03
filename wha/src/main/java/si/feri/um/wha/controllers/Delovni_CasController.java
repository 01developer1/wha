package si.feri.um.wha.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.dao.Delovni_CasRepository;
import si.feri.um.wha.models.Delovni_Cas;
import si.feri.um.wha.models.Zaposleni;

@RestController
@CrossOrigin
@RequestMapping("/delovni_casi")
public class Delovni_CasController {

    @Autowired
    private Delovni_CasRepository delovni_casRepositoryDao;
    @GetMapping
    public Iterable<Delovni_Cas> vrniDelovni_Cas(){
        return delovni_casRepositoryDao.findAll();
    }

    @PostMapping
    public Delovni_Cas dodajDelovni_Cas(@RequestBody Delovni_Cas delovni_cas){
        return delovni_casRepositoryDao.save(delovni_cas);
    }

    @GetMapping("/{ID_delovni_cas}")
    public Delovni_Cas vrniDolocenDelovniCas(@PathVariable(name = "ID_delovni_cas") Long ID_delovni_cas){
        return delovni_casRepositoryDao.vrniDolocenDelovniCas(ID_delovni_cas);
    }

    @DeleteMapping("/izbrisi/{ID_delovni_cas}")
    public ResponseEntity<String> izbrisiDelovniCas(@PathVariable(name = "ID_delovni_cas") Long ID_delovni_cas) throws Exception {
        delovni_casRepositoryDao.deleteById(ID_delovni_cas);
        return ResponseEntity.ok("Uspesno izbrisan delovni_cas.");
    }
}
