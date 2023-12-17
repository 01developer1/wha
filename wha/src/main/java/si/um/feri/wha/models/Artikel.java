package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Artikel{

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

    public void setID_artikel(Long ID_artikel) {
        this.ID_artikel = ID_artikel;
    }

    public Long getID_artikel() {
        return this.ID_artikel;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getNaziv() {
        return this.naziv;
    }

    public void setKolicina(int kolicina) {
        this.kolicina = kolicina;
    }

    public int getKolicina() {
        return this.kolicina;
    }

    public void setProdajnaCena(double prodajnaCena) {
        this.prodajnaCena = prodajnaCena;
    }

    public double getProdajnaCena() {
        return this.prodajnaCena;
    }

    public void setDobavnaCena(double dobavnaCena) {
        this.dobavnaCena = dobavnaCena;
    }

    public double getDobavnaCena() {
        return this.dobavnaCena;
    }

    public void setLokacijaArtikla(String lokacijaArtikla) {
        this.lokacijaArtikla = lokacijaArtikla;
    }

    public String getLokacijaArtikla() {
        return this.lokacijaArtikla;
    }


}