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
import AddIcon from '@mui/icons-material/Add';
import api from "../../../services/api";
import { Edit } from '../../../../node_modules/@mui/icons-material/index';
import { useState, useEffect } from 'react';

 
 
export default function NarocilaTable({ narocila, fetchNarocila, showDeleteAlert, handleEditClick }) {
  const [showHello, setShowHello] = useState({});
  const [orderProducts, setOrderProducts] = useState({});

   const izbrisiNarocilo = (narocilo_id) => {
      api.delete(`/narocila/izbrisi/${narocilo_id}`)
        .then((result) => {
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
  
    const handlePlusClick = (narocilo_id) => {
      if (showHello[narocilo_id]) {
        // If the table is already visible, hide it
        setShowHello((prevShowHello) => ({
          ...prevShowHello,
          [narocilo_id]: false,
        }));
      } else {
        // Otherwise, fetch and show the table
        api.get(`/narocila/${narocilo_id}`)
          .then((result) => {
            const numbers = result.data.artikli;
            const fetchPromises = numbers.map((number) => api.get(`/artikli/${number}`));
  
            Promise.all(fetchPromises)
              .then((productsData) => {
                const fetchedProducts = productsData.map((productData) => productData.data);
  
                setOrderProducts((prevOrderProducts) => ({
                  ...prevOrderProducts,
                  [narocilo_id]: fetchedProducts,
                }));
  
                setShowHello((prevShowHello) => ({
                  ...prevShowHello,
                  [narocilo_id]: true,
                }));
              })
              .catch((error) => {
                console.error('Error fetching products for the order!', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching order details!', error);
          });
      }
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
            <React.Fragment key={narocilo.id_artikel}>
            <TableRow
              key={narocilo.id_artikel}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color: 'grey' }}>
                {narocilo.id_narocilo}
              </TableCell>
              <TableCell align="right">{new Date(narocilo.datumVnosa).toLocaleString()}</TableCell>
              <TableCell align="right">{narocilo.stranka.naziv}</TableCell>
              <TableCell align="right">{narocilo.zaposlen.ime} {narocilo.zaposlen.priimek}</TableCell>
              <TableCell align="right">{new Date(narocilo.rokPriprave).toLocaleString()}</TableCell>
              <TableCell align="right">{narocilo.stanjeNarocila}</TableCell>
              <TableCell align="right">{narocilo.cenaSkupaj +" €"}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="edit" size="large" onClick={() => handleEditClick(narocilo.id_narocilo)} >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={handleDeleteClick(narocilo.id_narocilo)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    aria-label="add"
                    size="large"
                    onClick={() => handlePlusClick(narocilo.id_narocilo)}
                  >
                    <AddIcon />
                  </IconButton>
                </TableCell>
                </TableRow>
                {showHello[narocilo.id_narocilo] && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Table size="small" aria-label="product details">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Naziv</TableCell>
                          <TableCell>Dobavna Cena</TableCell>
                          <TableCell>Prodajna Cena</TableCell>
                          <TableCell>Količina</TableCell>
                          <TableCell>Skupaj</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orderProducts[narocilo.id_narocilo] &&
                          orderProducts[narocilo.id_narocilo].map((product, index) => (
                            <TableRow key={product.id_artikel}>
                              <TableCell>{product.id_artikel}</TableCell>
                              <TableCell>{product.naziv}</TableCell>
                              <TableCell>{product.dobavnaCena +" €"}</TableCell>
                              <TableCell>{product.prodajnaCena +" €"}</TableCell>
                              <TableCell>{narocilo.seznamKolicin[index]}</TableCell>
                              <TableCell>{(product.prodajnaCena * narocilo.seznamKolicin[index]).toFixed(2)+" €"}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}