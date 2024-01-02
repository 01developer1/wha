package si.feri.um.wha.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.dao.Delovni_CasRepository;
import si.feri.um.wha.models.Delovni_Cas;
import si.feri.um.wha.models.Zaposleni;

@RestController
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
}
