package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

@Entity
public class Delovni_cas {
    private Object ID_delovni_cas;
    private DateTime ura_zacetka;
    private DateTime ura_zakljucka;
    public Zaposleni zaposlen;

    public void dodajDelovniCas() {
        throw new UnsupportedOperationException();
    }

    public void setID_delovni_cas(Object ID_delovni_cas) {
        this.ID_delovni_cas = ID_delovni_cas;
    }

    public void getID_delovni_cas() {
        return this.ID_delovni_cas;
    }

    public void setUra_zacetka(DateTime ura_zacetka) {
        this.ura_zacetka = ura_zacetka;
    }

    public DateTime getUra_zacetka() {
        return this.ura_zacetka;
    }

    public void setUra_zakljucka(DateTime ura_zakljucka) {
        this.ura_zakljucka = ura_zakljucka;
    }

    public DateTime getUra_zakljucka() {
        return this.ura_zakljucka;
    }
}