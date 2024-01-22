import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import api from "../../../services/api";
import Alert from "@mui/material/Alert";

export default function UserForm({ fetchUser }) {
  const [userData, setUserData] = useState({
    ime: "",
    priimek: "",
    username: "",
    password: "",
    email: "",
    placa: "",
    telefon: "",
    tip_zaposlenega: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const createUser = () => {
    console.log(userData);
    api
      .post(`/zaposleni`, userData)
      .then((result) => {
        console.log(result.data);
        fetchUser();
      })
      .catch((error) => {
        console.error("There was an error creating new user!", error);
      });
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    createUser();
    fetchUser();
  };

  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const showDeleteAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const alertStyle = {
    position: "fixed", // Fixed position
    top: 15, // 10px from the top
    left: "50%", // Centered horizontally
    transform: "translateX(-50%)", // Adjust for centering
    zIndex: 1000, // Ensure it's above other elements
    margin: "0 auto", // Centering for smaller screens
    width: "80%", // Responsive width
    opacity: 0.95, // 85% opacity
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      {showAlert && (
        <Alert style={alertStyle} severity="success">
          Zaposleni uspešno izbrisan!
        </Alert>
      )}
      <form onSubmit={handleCreateUser}>
        <TextField
          label="Ime"
          name="ime"
          variant="outlined"
          onChange={handleChange}
          value={userData.ime}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Priimek"
          name="priimek"
          variant="outlined"
          onChange={handleChange}
          value={userData.priimek}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Uporabniško ime"
          name="username"
          variant="outlined"
          onChange={handleChange}
          value={userData.username}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Geslo"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}
          value={userData.password}
          fullWidth
          margin="normal"
        />
        <TextField
          label="E-pošta"
          name="email"
          variant="outlined"
          onChange={handleChange}
          value={userData.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plača"
          name="placa"
          variant="outlined"
          onChange={handleChange}
          value={userData.placa}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefon"
          name="telefon"
          variant="outlined"
          onChange={handleChange}
          value={userData.telefon}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Ustvari
        </Button>
      </form>
    </>
  );
}
