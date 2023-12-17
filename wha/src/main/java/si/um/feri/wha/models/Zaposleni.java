package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Zaposleni {
    private Object ID_zaposleni;
    private String ime;
    private String priimek;
    private String telefon;
    private double placa;

    public int izracunajUre() {
        throw new UnsupportedOperationException();
    }

    public double izracunajPlaco() {
        throw new UnsupportedOperationException();
    }

    public void setID_zaposleni(Object ID_zaposleni) {
        this.ID_zaposleni = ID_zaposleni;
    }

    public void getID_zaposleni() {
        return this.ID_zaposleni;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getIme() {
        return this.ime;
    }

    public void setPriimek(String priimek) {
        this.priimek = priimek;
    }

    public String getPriimek() {
        return this.priimek;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getTelefon() {
        return this.telefon;
    }

    public void setPlaca(double placa) {
        this.placa = placa;
    }

    public double getPlaca() {
        return this.placa;
    }
}