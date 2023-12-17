package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Zaloga {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_zaloga;

    private ArrayList seznamKolicin;
    private ArrayList<Artikel> seznamArtiklov = new ArrayList<Artikel>();


    public void setID_zaloga(Long ID_zaloga) {
        this.ID_zaloga = ID_zaloga;
    }

    public Long getID_zaloga() {
        return this.ID_zaloga;
    }
    public void setSeznamKolicin(ArrayList seznamKolicin) {
        this.seznamKolicin = seznamKolicin;
    }

    public ArrayList getSeznamKolicin() {
        return this.seznamKolicin;
    }

}