import React, { useEffect, useState } from "react";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import api from "../../../services/api";
import Alert from '@mui/material/Alert';

export default function UrediZaposleni({ userToEdit, fetchUser, onCancel }) {
  const [userData, setUserData] = useState({
    ime: '',
    priimek: '',
    username: '',
    password: '',
    email: '',
    placa: '',
    telefon: '',
    tip_zaposlenega: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (userToEdit) {
      setUserData({
        ime: userToEdit.ime,
        priimek: userToEdit.priimek,
        username: userToEdit.username,
        password: userToEdit.password,
        email: userToEdit.email,
        placa: userToEdit.placa,
        telefon: userToEdit.telefon,
        tip_zaposlenega: userToEdit.tip_zaposlenega
      });
    }
  }, [userToEdit]);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const updateUser = (user_id) => {
    console.log(userData);
    api
      .put(`/zaposleni/posodobi/${user_id}`, userData)
      .then((result) => {
        console.log(result.data);
        fetchUser();
        setShowAlert(true);
        onCancel(); // Close the edit form
      })
      .catch((error) => {
        console.error('There was an error updating the user!', error);
      });
  };

  const handleUpdateUser = (event) => {
    event.preventDefault();
    updateUser(userToEdit.id_zaposleni);
  };

  const alertStyle = {
    position: 'fixed',
    top: 15,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    margin: '0 auto',
    width: '80%',
    opacity: 0.95,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <>
      {showAlert && <Alert  style={alertStyle} severity="success">Zaposleni uspešno posodobljen!</Alert>}
      <form onSubmit={handleUpdateUser}>
        <TextField
          name="ime"
          label="Ime"
          variant="standard"
          onChange={handleChange}
          value={userData.ime}
        />
        <TextField
          name="priimek"
          label="Priimek"
          variant="standard"
          onChange={handleChange}
          value={userData.priimek}
        />
        <TextField
          name="username"
          label="Uporabniško ime"
          variant="standard"
          onChange={handleChange}
          value={userData.username}
        />
        <TextField
          name="password"
          label="Geslo"
          type="password"
          variant="standard"
          onChange={handleChange}
          value={userData.password}
        />
        <TextField
          name="email"
          label="E-pošta"
          variant="standard"
          onChange={handleChange}
          value={userData.email}
        />
        <TextField
          name="placa"
          label="Plača"
          variant="standard"
          onChange={handleChange}
          value={userData.placa}
        />
        <TextField
          name="telefon"
          label="Telefon"
          variant="standard"
          onChange={handleChange}
          value={userData.telefon}
        />
        <FormControl fullWidth>
          <InputLabel id="role-select-label">Delovno Mesto</InputLabel>
          <Select
            labelId="role-select-label"
            name="tip_zaposlenega"
            value={userData.tip_zaposlenega}
            label="Delovno Mesto"
            onChange={handleChange}
          >
            <MenuItem value="VODJA_PODJETJA">Vodja podjetja</MenuItem>
            <MenuItem value="DOKUMENTARIST">Dokumentarist</MenuItem>
            <MenuItem value="SKLADISCNIK">Skladiščnik</MenuItem>
            <MenuItem value="VODJA_SKLADISCA">Vodja skladišča</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Posodobi
        </Button>
      </form>
    </>
  );
}
