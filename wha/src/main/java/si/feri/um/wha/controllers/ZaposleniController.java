package si.feri.um.wha.controllers;


import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.RoleRepository;
import si.feri.um.wha.dao.ZaposleniRepository;
import si.feri.um.wha.models.*;
import si.feri.um.wha.models.Zaposleni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/zaposleni")
public class ZaposleniController {
    @Autowired
    private ZaposleniRepository zaposleniDao;
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping
    public Iterable<Zaposleni> vrniZaposleni(){
        return zaposleniDao.findAll();
    }

    @PostMapping
    public ResponseEntity<Zaposleni> dodajZaposlenega(@RequestBody Zaposleni zaposleni){
        // Before saving, you might want to perform some checks or modify the data if needed
        // For example, you could encode the password before saving
        System.out.println(zaposleni);
        //zaposleni.setPassword(passwordEncoder.encode(zaposleni.getPassword()));

        Role defaultRole = roleRepository.findByName("ROLE_SKLADISCNIK"); // or any other default role name

        /*if (defaultRole != null) {

            zaposleni.setRoles(Arrays.asList(defaultRole));
        } else {

        }*/
        // Set the user as enabled by default or based on some condition
        zaposleni.setEnabled(true);

        // Save the new Zaposleni (user) to the database
        Zaposleni savedZaposleni = zaposleniDao.save(zaposleni);
        return ResponseEntity.ok(savedZaposleni);
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

    @PostMapping("/dodaj")
    public ResponseEntity<String> dodajZaposlene(@RequestBody List<Zaposleni> zaposleni) {
        Iterable<Zaposleni> savedZaposleni = zaposleniDao.saveAll(zaposleni);
        return ResponseEntity.ok("Uspesno dodani zaposleni.");
    }

    @PutMapping("/posodobi/{ID_zaposleni}")
    public ResponseEntity<String> posodobiZaposleni(@PathVariable(name = "ID_zaposleni") Long ID_zaposleni, @RequestBody Zaposleni updatedZaposleni) {
        Zaposleni existingZaposleni = zaposleniDao.vrniDolocenegaZaposlenega(ID_zaposleni);

        if (existingZaposleni == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedZaposleni.getIme() != null) {
            existingZaposleni.setIme(updatedZaposleni.getIme());
        }
        if (updatedZaposleni.getPriimek() != null) {
            existingZaposleni.setPriimek(updatedZaposleni.getPriimek());
        }
        if (updatedZaposleni.getTelefon() != null) {
            existingZaposleni.setTelefon(updatedZaposleni.getTelefon());
        }
        if (updatedZaposleni.getPlaca() != 0.0) {
            existingZaposleni.setPlaca(updatedZaposleni.getPlaca());
        }
        if (updatedZaposleni.getTip_zaposlenega() != null) {
            existingZaposleni.setTip_zaposlenega(updatedZaposleni.getTip_zaposlenega());
        }

        zaposleniDao.save(existingZaposleni);

        return ResponseEntity.ok("Zaposleni uspešno posodobljen.");
    }


}
