package si.feri.um.wha.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.*;

@Entity
public class Narocilo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_narocilo;

    private double cenaSkupaj;
    private ArrayList<Integer> seznamKolicin = new ArrayList<>();
    @Enumerated(EnumType.STRING)
    @Column(name = "stanje_narocila")
    private Stanje_narocila stanjeNarocila;
    @ManyToOne
    @JoinColumn(name = "ID_zaposleni")
    private Zaposleni zaposlen;
    @ManyToMany
    @JoinTable(
            name = "narocilo_artikel",
            joinColumns = @JoinColumn(name = "ID_narocilo"),
            inverseJoinColumns = @JoinColumn(name = "ID_artikel")
    )
    private List<Artikel> artikli = new ArrayList<>();
    private LocalDateTime datumVnosa;
    private LocalDateTime rokPriprave;
    private LocalDateTime casPriprave;
    @ManyToOne
    @JoinColumn(name = "ID_stranka")
    private Stranka Stranka;

    public Narocilo() {
    }

    public Narocilo(double cenaSkupaj, ArrayList<Integer> seznamKolicin, Zaposleni zaposlen, List<Artikel> artikli, LocalDateTime datumVnosa, LocalDateTime rokPriprave, LocalDateTime casPriprave) {
        this.cenaSkupaj = cenaSkupaj;
        this.seznamKolicin = seznamKolicin;
        this.zaposlen = zaposlen;
        this.artikli = artikli;
        this.datumVnosa = datumVnosa;
        this.rokPriprave = rokPriprave;
        this.casPriprave = casPriprave;
        this.stanjeNarocila = Stanje_narocila.TODO;
    }

    public Narocilo(Long ID_narocilo, double cenaSkupaj, ArrayList<Integer> seznamKolicin, Zaposleni zaposlen, List<Artikel> artikli, LocalDateTime datumVnosa, LocalDateTime rokPriprave, LocalDateTime casPriprave) {
        this.ID_narocilo = ID_narocilo;
        this.cenaSkupaj = cenaSkupaj;
        this.seznamKolicin = seznamKolicin;
        this.zaposlen = zaposlen;
        this.artikli = artikli;
        this.datumVnosa = datumVnosa;
        this.rokPriprave = rokPriprave;
        this.casPriprave = casPriprave;
        this.stanjeNarocila = stanjeNarocila.TODO;
    }

    public Long getID_narocilo() {
        return ID_narocilo;
    }

    public void setID_narocilo(Long ID_narocilo) {
        this.ID_narocilo = ID_narocilo;
    }

    public double getCenaSkupaj() {
        return cenaSkupaj;
    }

    public void setCenaSkupaj(double cenaSkupaj) {
        this.cenaSkupaj = cenaSkupaj;
    }

    public ArrayList<Integer> getSeznamKolicin() {
        return seznamKolicin;
    }

    public void setSeznamKolicin(ArrayList<Integer> seznamKolicin) {
        this.seznamKolicin = seznamKolicin;
    }

    public Zaposleni getZaposlen() {
        return zaposlen;
    }

    public void setZaposlen(Zaposleni zaposlen) {
        this.zaposlen = zaposlen;
    }

    public List<Artikel> getArtikli() {
        return artikli;
    }

    public void setArtikli(List<Artikel> artikli) {
        this.artikli = artikli;
    }

    public LocalDateTime getDatumVnosa() {
        return datumVnosa;
    }

    public void setDatumVnosa(LocalDateTime datumVnosa) {
        this.datumVnosa = datumVnosa;
    }

    public LocalDateTime getRokPriprave() {
        return rokPriprave;
    }

    public void setRokPriprave(LocalDateTime rokPriprave) {
        this.rokPriprave = rokPriprave;
    }

    public LocalDateTime getCasPriprave() {
        return casPriprave;
    }

    public void setCasPriprave(LocalDateTime casPriprave) {
        this.casPriprave = casPriprave;
    }

    public Stanje_narocila getStanjeNarocila() {
        return stanjeNarocila;
    }

    public void setStanjeNarocila(Stanje_narocila stanjeNarocila) {
        this.stanjeNarocila = stanjeNarocila;
    }

    @Override
    public String toString() {
        return "Narocilo{" +
                "ID_narocilo=" + ID_narocilo +
                ", cenaSkupaj=" + cenaSkupaj +
                ", seznamKolicin=" + seznamKolicin +
                ", zaposlen=" + zaposlen +
                ", artikli=" + artikli +
                ", datumVnosa=" + datumVnosa +
                ", rokPriprave=" + rokPriprave +
                ", casPriprave=" + casPriprave +
                ", stanjeNarocila=" + stanjeNarocila +
                '}';
    }
}
