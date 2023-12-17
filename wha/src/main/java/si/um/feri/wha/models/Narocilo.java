package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

import java.util.ArrayList;

@Entity
public class Narocilo {
    private String ID_narocilo;
    private int cenaSkupaj;
    private Object seznamKolicin;
    private boolean zakljuceno;
    /**
     * Ko dokumentarist ustvari narocilo
     */
    private DateTime datumVnosa;
    /**
     * Rok, do kdaj mora skladiscnik pripraviti narocilo
     */
    private DateTime rokPriprave;
    /**
     * Cas, ko skladiscnik pripravi narocilo
     */
    private DateTime casPriprave;
    private ArrayList<Artikel> seznamArtiklov = new ArrayList<Artikel>();
    public Zaposleni zaposleni;

    public void dodajArtikelNaNarocilo(Artikel artikel, int kolicina) {
        throw new UnsupportedOperationException();
    }

    public void setID_narocilo(String ID_narocilo) {
        this.ID_narocilo = ID_narocilo;
    }

    public String getID_narocilo() {
        return this.ID_narocilo;
    }

    public void setCenaSkupaj(int cenaSkupaj) {
        this.cenaSkupaj = cenaSkupaj;
    }

    public int getCenaSkupaj() {
        return this.cenaSkupaj;
    }

    public void setSeznamKolicin(Object seznamKolicin) {
        this.seznamKolicin = seznamKolicin;
    }

    public void getSeznamKolicin() {
        return this.seznamKolicin;
    }

    public void setZakljuceno(boolean zakljuceno) {
        this.zakljuceno = zakljuceno;
    }

    public boolean isZakljuceno() {
        return this.zakljuceno;
    }

    public void setDatumVnosa(DateTime datumVnosa) {
        this.datumVnosa = datumVnosa;
    }

    public DateTime getDatumVnosa() {
        return this.datumVnosa;
    }

    public void setRokPriprave(DateTime rokPriprave) {
        this.rokPriprave = rokPriprave;
    }

    public DateTime getRokPriprave() {
        return this.rokPriprave;
    }

    public void setCasPriprave(DateTime casPriprave) {
        this.casPriprave = casPriprave;
    }

    public DateTime getCasPriprave() {
        return this.casPriprave;
    }
}