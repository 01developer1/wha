import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ArtikliTable({artikli}) {
   console.log(artikli)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">naziv</TableCell>
            <TableCell align="right">kolicina</TableCell>
            <TableCell align="right">prodajna cena</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artikli.map((artikel) => (
            <TableRow
              key={artikel.id_artikel}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {artikel.id_artikel}
              </TableCell>
              <TableCell align="right">{artikel.naziv}</TableCell>
              <TableCell align="right">{artikel.kolicina}</TableCell>
              <TableCell align="right">{artikel.prodajnaCena}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}