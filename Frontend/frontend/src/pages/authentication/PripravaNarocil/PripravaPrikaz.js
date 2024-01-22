import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from "../../../services/api";

export default function PripravaPrikaz({ narocilo_id }) {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    api.get(`/narocila/${narocilo_id}`)
      .then((result) => {
        const narocilo = result.data;
        const fetchPromises = narocilo.artikli.map((number) => api.get(`/artikli/${number}`));

        Promise.all(fetchPromises)
          .then((productsData) => {
            const fetchedProducts = productsData.map((productData) => productData.data);
            setOrderDetails({
              ...narocilo,
              products: fetchedProducts,
            });
          })
          .catch((error) => {
            console.error('Error fetching products for the order!', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching order details!', error);
      });
  }, [narocilo_id]);

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
         </TableRow>
       </TableHead>
       <TableBody>
         {orderDetails && (
           <React.Fragment>
             <TableRow
               key={orderDetails.id_artikel}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row" style={{ color: 'grey' }}>
                 {orderDetails.id_narocilo}
               </TableCell>
               <TableCell align="right">{new Date(orderDetails.datumVnosa).toLocaleString()}</TableCell>
               <TableCell align="right">{orderDetails.stranka.naziv}</TableCell>
               <TableCell align="right">{orderDetails.zaposlen.ime} {orderDetails.zaposlen.priimek}</TableCell>
               <TableCell align="right">{new Date(orderDetails.rokPriprave).toLocaleString()}</TableCell>
               <TableCell align="right">{orderDetails.stanjeNarocila}</TableCell>
               <TableCell align="right">{orderDetails.cenaSkupaj + " €"}</TableCell>
             </TableRow>
             <TableRow>
               <TableCell colSpan={8}>
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
                     {orderDetails.products.map((product, index) => (
                       <TableRow key={product.id_artikel}>
                         <TableCell>{product.id_artikel}</TableCell>
                         <TableCell>{product.naziv}</TableCell>
                         <TableCell>{product.dobavnaCena + " €"}</TableCell>
                         <TableCell>{product.prodajnaCena + " €"}</TableCell>
                         <TableCell>{orderDetails.seznamKolicin[index]}</TableCell>
                         <TableCell>{(product.prodajnaCena * orderDetails.seznamKolicin[index]).toFixed(2) + " €"}</TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </TableCell>
             </TableRow>
           </React.Fragment>
         )}
       </TableBody>
     </Table>
   </TableContainer>
 );
}
