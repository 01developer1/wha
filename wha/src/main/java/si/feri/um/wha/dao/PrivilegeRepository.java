package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Privilege;
import si.feri.um.wha.models.Zaposleni;

public interface PrivilegeRepository {

    Privilege findByName(String name);

    Privilege save(Privilege privilege);
    //@Query("select p from Privilege z where p.name = :name")
    //Privilege findByName(@Param("name") String name);

    //@Query("insert into Privilege (name)")
}
