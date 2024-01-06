package si.feri.um.wha.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import si.feri.um.wha.models.Privilege;
import si.feri.um.wha.models.Role;
import si.feri.um.wha.models.Zaposleni;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);

    Role save(Role role);

    //@Query("select r from Role z where r.name = :name")
    //Role findByName(@Param("name") String name);
}
