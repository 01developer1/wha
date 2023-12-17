package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

import java.time.LocalDateTime

@Entity
public class Delovni_cas {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_delovni_cas;

    private LocalDateTime ura_zacetka;
    private LocalDateTime ura_zakljucka;
    public Zaposleni zaposlen;

    public void dodajDelovniCas() {
        throw new UnsupportedOperationException();
    }

    public void setID_delovni_cas(Long ID_delovni_cas) {
        this.ID_delovni_cas = ID_delovni_cas;
    }

    public Long getID_delovni_cas() {
        return this.ID_delovni_cas;
    }

    public void setUra_zacetka(DateTime ura_zacetka) {
        this.ura_zacetka = ura_zacetka;
    }

    public LocalDateTime getUra_zacetka() {
        return this.ura_zacetka;
    }

    public void setUra_zakljucka(DateTime ura_zakljucka) {
        this.ura_zakljucka = ura_zakljucka;
    }

    public LocalDateTime getUra_zakljucka() {
        return this.ura_zakljucka;
    }
}