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
import EditIcon from '@mui/icons-material/Edit';
import api from "../../../services/api";
import { Edit } from '../../../../node_modules/@mui/icons-material/index';

 
 
export default function NarocilaTable({ narocila, fetchNarocila, showDeleteAlert }) {
 
   const izbrisiNarocilo = (narocilo_id) => {
      api.delete(`/narocila/izbrisi/${narocilo_id}`)
        .then((result) => {
          console.log(result.data);
          // Refresh the article list after deletion
          fetchNarocila();
 
          showDeleteAlert();
        })
        .catch((error) => {
          console.error('There was an error deleting the artikel!', error);
        });
    };
  
    // Function to handle the delete button click
    const handleDeleteClick = (narocilo_id) => {
      // Call the delete function only when the button is clicked
      return () => izbrisiNarocilo(narocilo_id);
    };
  
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Datum Vnosa</TableCell>
            <TableCell align="right">Stranka</TableCell>
            <TableCell align="right">Zaposleni</TableCell>
            <TableCell align="right">Rok Priprave</TableCell>
            <TableCell align="right">Stanje</TableCell>
            <TableCell align="right">Skupaj Cena</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {narocila.map((narocilo) => (
            <TableRow
              key={narocilo.id_artikel}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color: 'grey' }}>
                {narocilo.id_narocilo}
              </TableCell>
              <TableCell align="right">{narocilo.datumVnosa}</TableCell>
              <TableCell align="right">{narocilo.stranka.id_stranka}</TableCell>
              <TableCell align="right">{narocilo.zaposlen.id_zaposleni}</TableCell>
              <TableCell align="right">{narocilo.rokPriprave}</TableCell>
              <TableCell align="right">{narocilo.stanjeNarocila}</TableCell>
              <TableCell align="right">{narocilo.cenaSkupaj}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="edit" size="large">
                     <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" size="large" onClick={handleDeleteClick(narocilo.id_narocilo)}>
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