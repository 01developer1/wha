package si.feri.um.wha.controllers;

import si.feri.um.wha.dao.NarociloRepository;
import si.feri.um.wha.models.Narocilo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/narocila")
public class NarociloController {

    @Autowired
    private NarociloRepository narociloDao;

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
