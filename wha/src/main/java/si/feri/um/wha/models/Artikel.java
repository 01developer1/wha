package si.feri.um.wha.models;

import jakarta.persistence.*;

import java.util.*;

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

    public void dodajKolicinoArtiklu(int kolicina) {
        throw new UnsupportedOperationException();
    }

    public void znizajKolicino(int kolicina) {
        throw new UnsupportedOperationException();
    }

    public void spremeniProdajnoCeno(double novaCena) {
        throw new UnsupportedOperationException();
    }

    public void spremeniDobavnoCeno(double novaCena) {
        throw new UnsupportedOperationException();
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

    public Artikel() {
    }

    public Artikel(Long ID_artikel, String naziv, int kolicina, double prodajnaCena, double dobavnaCena, String lokacijaArtikla) {
        this.ID_artikel = ID_artikel;
        this.naziv = naziv;
        this.kolicina = kolicina;
        this.prodajnaCena = prodajnaCena;
        this.dobavnaCena = dobavnaCena;
        this.lokacijaArtikla = lokacijaArtikla;
    }

    public Artikel(String naziv, int kolicina, double prodajnaCena, double dobavnaCena, String lokacijaArtikla) {
        this.naziv = naziv;
        this.kolicina = kolicina;
        this.prodajnaCena = prodajnaCena;
        this.dobavnaCena = dobavnaCena;
        this.lokacijaArtikla = lokacijaArtikla;
    }
}
