package si.feri.um.wha.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import si.feri.um.wha.dao.RoleRepository;
import si.feri.um.wha.dao.ZaposleniRepository;
import si.feri.um.wha.models.*;
import si.feri.um.wha.models.Zaposleni;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        //zaposleni.setPassword(passwordEncoder.encode(zaposleni.getPassword()));
        System.out.print(zaposleni.getEmail());
        Role defaultRole = roleRepository.findByName("ROLE_SKLADISCNIK");

        /*if (defaultRole != null) {

            zaposleni.setRoles(Arrays.asList(defaultRole));
        } else {

        }*/
        zaposleni.setEnabled(true);

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

    @PostMapping("/prijava")
    public ResponseEntity<?> prijaviZaposlenega(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        System.out.println(username);

        try {
            Zaposleni zaposleniPodatki = zaposleniDao.vrniDolocenegaZaposlenegaUsername(username);

            if (zaposleniPodatki != null && zaposleniPodatki.getPassword().equals(password)) {
                // Passwords match, return the authenticated user
                // Customize the response as needed, e.g., return only ime, priimek, and id
                Map<String, Object> response = new HashMap<>();
                response.put("ime", zaposleniPodatki.getIme());
                response.put("priimek", zaposleniPodatki.getPriimek());
                response.put("id", zaposleniPodatki.getID_zaposleni());
                return ResponseEntity.ok(response);
            } else {
                // Passwords do not match or user not found
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
            }
        } catch (Exception e) {
            // Handle any exceptions here
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
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
