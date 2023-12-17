package si.um.feri.wha.models;

import jakarta.persistence.*;

import java.util.*;

import java.util.ArrayList;
@Entity
public class Zaloga {
    private ArrayList seznamKolicin;
    private ArrayList<Artikel> seznamArtiklov = new ArrayList<Artikel>();
}