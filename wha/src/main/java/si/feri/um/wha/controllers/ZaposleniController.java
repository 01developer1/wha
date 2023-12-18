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

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

}
