package si.feri.um.wha.models;

import jakarta.persistence.*;

@Entity
public class Artikel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_artikel;
    private String naziv;
    private int kolicina;
    private double prodajnaCena;
    private double dobavnaCena;
    private String lokacijaArtikla;
    private Tip_artikla tip_artikla;

    public Artikel() {
    }

    public Artikel(Long ID_artikel, String naziv, int kolicina, double prodajnaCena, double dobavnaCena, String lokacijaArtikla, Tip_artikla tip_artikla) {
        this.ID_artikel = ID_artikel;
        this.naziv = naziv;
        this.kolicina = kolicina;
        this.prodajnaCena = prodajnaCena;
        this.dobavnaCena = dobavnaCena;
        this.lokacijaArtikla = lokacijaArtikla;
        this.tip_artikla = tip_artikla;
    }

    public Artikel(String naziv, int kolicina, double prodajnaCena, double dobavnaCena, String lokacijaArtikla, Tip_artikla tip_artikla) {
        this.naziv = naziv;
        this.kolicina = kolicina;
        this.prodajnaCena = prodajnaCena;
        this.dobavnaCena = dobavnaCena;
        this.lokacijaArtikla = lokacijaArtikla;
        this.tip_artikla = tip_artikla;
    }

    public Long getID_artikel() {
        return ID_artikel;
    }

    public void setID_artikel(Long ID_artikel) {
        this.ID_artikel = ID_artikel;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public int getKolicina() {
        return kolicina;
    }

    public void setKolicina(int kolicina) {
        this.kolicina = kolicina;
    }

    public double getProdajnaCena() {
        return prodajnaCena;
    }

    public void setProdajnaCena(double prodajnaCena) {
        this.prodajnaCena = prodajnaCena;
    }

    public double getDobavnaCena() {
        return dobavnaCena;
    }

    public void setDobavnaCena(double dobavnaCena) {
        this.dobavnaCena = dobavnaCena;
    }

    public String getLokacijaArtikla() {
        return lokacijaArtikla;
    }

    public void setLokacijaArtikla(String lokacijaArtikla) {
        this.lokacijaArtikla = lokacijaArtikla;
    }

    public Tip_artikla getTip_artikla() {
        return tip_artikla;
    }

    public void setTip_artikla(Tip_artikla tip_artikla) {
        this.tip_artikla = tip_artikla;
    }
}
