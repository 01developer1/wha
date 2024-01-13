import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../../services/api";
import EditIcon from '@mui/icons-material/Edit';
import HoverDot from './HoverDot';
import UrediZaposleni from './UrediZaposleni'; // Update the import

export default function UserTable({ users, fetchUser, showDeleteAlert }) {
  const [editingZaposleni, setEditingZaposleni] = useState(null);

  const izbrisiUser = (user_id) => {
    api.delete(`/zaposleni/izbrisi/${user_id}`)
      .then((result) => {
        console.log(result.data);
        fetchUser();
        showDeleteAlert();
      })
      .catch((error) => {
        console.error('There was an error deleting the user!', error);
      });
  };

  const handleDeleteClick = (user_id) => {
    return () => izbrisiUser(user_id);
  };

  const handleEditClick = (user) => {
    setEditingZaposleni(user);
  };

  const handleCancelEdit = () => {
    setEditingZaposleni(null);
  };

  return (
    <div>
      {editingZaposleni && (
        <UrediZaposleni
          userToEdit={editingZaposleni} // Pass the user data to UrediZaposleni
          fetchUser={fetchUser}
          onCancel={handleCancelEdit}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell>Id</TableCell>
              <TableCell align="right">Ime</TableCell>
              <TableCell align="right">Priimek</TableCell>
              <TableCell align="center">Uporabniško ime</TableCell>
              <TableCell align="left">Geslo</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Telefon</TableCell>
              <TableCell align="center">Bruto Plača</TableCell>
              <TableCell align="left">Delovno Mesto</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id_zaposleni}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <HoverDot user={user} />
                </TableCell>
                <TableCell component="th" scope="row" style={{ color: 'grey' }}>
                  {user.id_zaposleni}
                </TableCell>
                <TableCell align="right">{user.ime}</TableCell>
                <TableCell align="right">{user.priimek}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="left">{user.password}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.telefon}</TableCell>
                <TableCell align="center">{user.placa} €</TableCell>
                <TableCell align="left">{user.tip_zaposlenega}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="edit" size="large" onClick={() => handleEditClick(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" size="large" onClick={handleDeleteClick(user.id_zaposleni)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
