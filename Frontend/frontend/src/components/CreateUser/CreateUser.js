import React, { useEffect, useState } from "react";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import api from "../../services/api";
import UserTable from "./UserTable";

const CreateUser = () => {
   const [userData, setUserData] = useState({
      ime: '',
      priimek: '',
      username: '',
      password: '',
      email: '',
      placa: '',
      telefon: '',
      role: ''
   });

   const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
   };

   const createUser = () => {
      api.post(`/zaposleni`, userData)
        .then((result) => {
          console.log(result.data);
          fetchUser();
        })
        .catch((error) => {
          console.error('There was an error creating new user!', error);
        });
   };

   const handleCreateUser = (event) => {
      event.preventDefault();
      createUser();
   };

   const [user, setUsers] = useState([]);

   const fetchUser = () => {
      api.get("/zaposleni").then((result) => {
          setUsers(result.data);
      });
   };

   useEffect(() => {
      fetchUser();
   }, []);

   return (
      <>
         <h1>Ustvari uporabnika</h1>
         <form onSubmit={handleCreateUser}>
            <TextField name="ime" label="Ime" variant="standard" onChange={handleChange} value={userData.ime} />
            <TextField name="priimek" label="Priimek" variant="standard" onChange={handleChange} value={userData.priimek} />
            <TextField name="username" label="Uporabniško ime" variant="standard" onChange={handleChange} value={userData.username} />
            <TextField name="password" label="Geslo" type="password" variant="standard" onChange={handleChange} value={userData.password} />
            <TextField name="email" label="E-pošta" variant="standard" onChange={handleChange} value={userData.email} />
            <TextField name="placa" label="Plača" variant="standard" onChange={handleChange} value={userData.placa} />
            <TextField name="telefon" label="Telefon" variant="standard" onChange={handleChange} value={userData.telefon} />
            <FormControl fullWidth>
               <InputLabel id="role-select-label">Delovno Mesto</InputLabel>
               <Select
                  labelId="role-select-label"
                  name="role"
                  value={userData.role}
                  label="Delovno Mesto"
                  onChange={handleChange}
               >
                  <MenuItem value="Vodja podjetja">Vodja podjetja</MenuItem>
                  <MenuItem value="Dokumentarist">Dokumentarist</MenuItem>
                  <MenuItem value="Skladiščnik">Skladiščnik</MenuItem>
                  <MenuItem value="Vodja skladišča">Vodja skladišča</MenuItem>
               </Select>
            </FormControl>
            <Button type="submit" variant="contained">Ustvari</Button>
         </form>
         <UserTable users={user} fetchUser={fetchUser} />
      </>
   );
};

export default CreateUser;
