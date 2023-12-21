package si.feri.um.wha.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
public class Zaposleni {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID_zaposleni;
    private String ime;
    private String priimek;
    private String telefon;
    private double placa;
    @Enumerated(EnumType.STRING)
    @Column(name = "tip_zaposlenega")
    private Tip_zaposlenega tip_zaposlenega;

    public int izracunajUre() {
        throw new UnsupportedOperationException();
    }

    public double izracunajPlaco() {
        throw new UnsupportedOperationException();
    }

    public Zaposleni() {
    }

    public Zaposleni(Long ID_zaposleni, String ime, String priimek, String telefon, double placa, Tip_zaposlenega tip_zaposlenega) {
        this.ID_zaposleni = ID_zaposleni;
        this.ime = ime;
        this.priimek = priimek;
        this.telefon = telefon;
        this.placa = placa;
        this.tip_zaposlenega = tip_zaposlenega;
    }

    public Zaposleni(String ime, String priimek, String telefon, double placa, Tip_zaposlenega tip_zaposlenega) {
        this.ime = ime;
        this.priimek = priimek;
        this.telefon = telefon;
        this.placa = placa;
        this.tip_zaposlenega = tip_zaposlenega;
    }

    public Long getID_zaposleni() {
        return ID_zaposleni;
    }

    public void setID_zaposleni(Long ID_zaposleni) {
        this.ID_zaposleni = ID_zaposleni;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPriimek() {
        return priimek;
    }

    public void setPriimek(String priimek) {
        this.priimek = priimek;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public double getPlaca() {
        return placa;
    }

    public void setPlaca(double placa) {
        this.placa = placa;
    }

    public Tip_zaposlenega getTip_zaposlenega() {
        return tip_zaposlenega;
    }

    public void setTip_zaposlenega(Tip_zaposlenega tip_zaposlenega) {
        this.tip_zaposlenega = tip_zaposlenega;
    }

    @Override
    public String toString() {
        return "Zaposleni{" +
                "ID_zaposleni=" + ID_zaposleni +
                ", ime='" + ime + '\'' +
                ", priimek='" + priimek + '\'' +
                ", telefon='" + telefon + '\'' +
                ", placa=" + placa +
                ", tip_zaposlenega=" + tip_zaposlenega +
                '}';
    }
}
