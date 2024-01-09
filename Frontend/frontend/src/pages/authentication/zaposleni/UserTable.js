import * as React from 'react';
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


export default function UserTable({ users, fetchUser, showDeleteAlert }) {

   const izbrisiUser = (user_id) => {
      api.delete(`/zaposleni/izbrisi/${user_id}`)
        .then((result) => {
          console.log(result.data);
          // Refresh the article list after deletion
          fetchUser();

          showDeleteAlert();
        })
        .catch((error) => {
          console.error('There was an error deleting the user!', error);
        });
    };
  
    // Function to handle the delete button click
    const handleDeleteClick = (user_id) => {
      // Call the delete function only when the button is clicked
      return () => izbrisiUser(user_id);
    };
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Ime</TableCell>
            <TableCell align="right">Priimek</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Geslo</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Plača</TableCell>
            <TableCell align="right">Telefon</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id_user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id_zaposleni}
              </TableCell>
              <TableCell align="right">{user.ime}</TableCell>
              <TableCell align="right">{user.priimek}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.password}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.placa}</TableCell>
              <TableCell align="right">{user.telefon}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="edit" size="large">
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
  );
}