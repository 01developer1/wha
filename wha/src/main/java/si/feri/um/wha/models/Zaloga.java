package si.feri.um.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Zaloga {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_zaloga;

    private ArrayList<Integer> seznamKolicin = new ArrayList<>();
    @ManyToMany
    @JoinTable(
            name = "zaloga_artikel",
            joinColumns = @JoinColumn(name = "ID_narocilo"),
            inverseJoinColumns = @JoinColumn(name = "ID_zaloga")
    )
    private List<Artikel> artikli = new ArrayList<>();

    public Zaloga() {
    }

    public Zaloga(ArrayList<Integer> seznamKolicin, List<Artikel> artikli) {
        this.seznamKolicin = seznamKolicin;
        this.artikli = artikli;
    }

    public Zaloga(Long ID_zaloga, ArrayList<Integer> seznamKolicin, List<Artikel> artikli) {
        this.ID_zaloga = ID_zaloga;
        this.seznamKolicin = seznamKolicin;
        this.artikli = artikli;
    }

    public Long getID_zaloga() {
        return ID_zaloga;
    }

    public void setID_zaloga(Long ID_zaloga) {
        this.ID_zaloga = ID_zaloga;
    }

    public ArrayList<Integer> getSeznamKolicin() {
        return seznamKolicin;
    }

    public void setSeznamKolicin(ArrayList<Integer> seznamKolicin) {
        this.seznamKolicin = seznamKolicin;
    }

    public List<Artikel> getArtikli() {
        return artikli;
    }

    public void setArtikli(List<Artikel> artikli) {
        this.artikli = artikli;
    }

    @Override
    public String toString() {
        return "Zaloga{" +
                "ID_zaloga=" + ID_zaloga +
                ", seznamKolicin=" + seznamKolicin +
                ", artikli=" + artikli +
                '}';
    }
}
