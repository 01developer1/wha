package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.ZalogaRepository;
import si.feri.um.wha.models.Zaloga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/zaloge")
public class ZalogaController {

    @Autowired
    private ZalogaRepository zalogaDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
