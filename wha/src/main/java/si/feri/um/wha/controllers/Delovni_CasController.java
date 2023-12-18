package si.feri.um.wha.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.feri.um.wha.dao.Delovni_CasRepository;

@RestController
@RequestMapping("/delovni_casi")
public class Delovni_CasController {

    @Autowired
    private Delovni_CasRepository delovni_casRepositoryDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
