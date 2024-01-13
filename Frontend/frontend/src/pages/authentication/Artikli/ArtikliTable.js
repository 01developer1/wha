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
import EditIcon from '@mui/icons-material/Edit';
import api from "../../../services/api";
import UrediArtikel from './UrediArtikel';
import MainCard from 'components/MainCard';

export default function ArtikliTable({ artikli, fetchArtikli, showDeleteAlert }) {
  const [editingArticle, setEditingArticle] = useState(null);

  const izbrisiArtikel = (artikel_id) => {
    api.delete(`/artikli/izbrisi/${artikel_id}`)
      .then((result) => {
        console.log(result.data);
        fetchArtikli();
        showDeleteAlert();
      })
      .catch((error) => {
        console.error('There was an error deleting the artikel!', error);
      });
  };

  const handleDeleteClick = (artikel_id) => {
    return () => izbrisiArtikel(artikel_id);
  };

  const handleEditClick = (artikel) => {
    return () => setEditingArticle(artikel);
  };

  const handleCancelEdit = () => {
    setEditingArticle(null);
  };

  return (
    <div>
      {editingArticle && (
        <MainCard style={{ marginBottom: '20px' }}>
        <UrediArtikel
          articleToEdit={editingArticle}
          fetchArtikli={fetchArtikli}
          onCancel={handleCancelEdit}
        />
        </MainCard>
      )}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Naziv</TableCell>
                <TableCell align="right">Količina</TableCell>
                <TableCell align="right">Prodajna Cena</TableCell>
                <TableCell align="right">Dobavna Cena</TableCell>
                <TableCell align="right">Lokacija</TableCell>
                <TableCell align="right">Tip</TableCell>
                <TableCell align="right"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {artikli.map((artikel) => (
                <TableRow
                  key={artikel.id_artikel}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ color: 'grey' }}>
                    {artikel.id_artikel}
                  </TableCell>
                  <TableCell align="right">{artikel.naziv}</TableCell>
                  <TableCell align="right">{artikel.kolicina}</TableCell>
                  <TableCell align="right">{artikel.prodajnaCena} €</TableCell>
                  <TableCell align="right">{artikel.dobavnaCena} €</TableCell>
                  <TableCell align="right">{artikel.lokacijaArtikla}</TableCell>
                  <TableCell align="right">{artikel.tip_artikla}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" size="large" onClick={handleEditClick(artikel)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" onClick={handleDeleteClick(artikel.id_artikel)}>
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
