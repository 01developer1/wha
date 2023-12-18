package si.feri.um.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Zaloga {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_zaloga;

    private ArrayList seznamKolicin;

    //@OneToMany(mappedBy = "zaloga", fetch= FetchType.LAZY, cascade = CascadeType.ALL)
    private ArrayList<Artikel> seznamArtiklov = new ArrayList<Artikel>() ;

    public Zaloga() {
    }

    public Zaloga(Long ID_zaloga, ArrayList seznamKolicin, ArrayList<Artikel> seznamArtiklov) {
        this.ID_zaloga = ID_zaloga;
        this.seznamKolicin = seznamKolicin;
        this.seznamArtiklov = seznamArtiklov;
    }

    public Zaloga(ArrayList seznamKolicin, ArrayList<Artikel> seznamArtiklov) {
        this.seznamKolicin = seznamKolicin;
        this.seznamArtiklov = seznamArtiklov;
    }

    public Long getID_zaloga() {
        return ID_zaloga;
    }

    public void setID_zaloga(Long ID_zaloga) {
        this.ID_zaloga = ID_zaloga;
    }

    public ArrayList getSeznamKolicin() {
        return seznamKolicin;
    }

    public void setSeznamKolicin(ArrayList seznamKolicin) {
        this.seznamKolicin = seznamKolicin;
    }

    public ArrayList<Artikel> getSeznamArtiklov() {
        return seznamArtiklov;
    }

    public void setSeznamArtiklov(ArrayList<Artikel> seznamArtiklov) {
        this.seznamArtiklov = seznamArtiklov;
    }
}
